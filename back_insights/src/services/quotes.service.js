import {Quote} from "../models/Quote.js";

// Créer une citation
export const createQuote = async (data, userId) => {
    const quote = new Quote({
        ...data,
        author: userId
    });
    return await quote.save();
};

// Récupérer les citations avec pagination et filtres
export const getAllQuotes = async (page = 1, limit = 10, sort = 'recent') => {
    const skip = (page - 1) * limit;
    let sortBy = { createdAt: -1 };

    if (sort === 'popular') {
        sortBy = { likesCount: -1 };
    }

    const quotes = await Quote.find()
        .populate('author', 'username avatar') 
        .sort(sortBy)
        .skip(skip)
        .limit(limit);

    const total = await Quote.countDocuments();
    
    return { quotes, total, pages: Math.ceil(total / limit) };
};

// Récupérer une seule citation
export const getQuoteById = async (id) => {
    return await Quote.findById(id).populate('author', 'username avatar bio');
};

// Mettre à jour (seulement si c'est l'auteur)
export const updateQuote = async (id, userId, updateData) => {
    const quote = await Quote.findOne({ _id: id, author: userId });
    if (!quote) throw new Error("Citation non trouvée ou non autorisée");
    
    Object.assign(quote, updateData);
    return await quote.save();
};

// Supprimer
export const deleteQuote = async (id, userId) => {
    const result = await Quote.findOneAndDelete({ _id: id, author: userId });
    if (!result) throw new Error("Suppression impossible : non autorisée");
    return result;
};

// Gérer les likes
export const toggleLike = async (quoteId, userId) => {
    const quote = await Quote.findById(quoteId);
    if (!quote) throw new Error("Citation introuvable");

    const index = quote.likes.indexOf(userId);

    if (index === -1) {
        quote.likes.push(userId);
        quote.likesCount += 1;
    } else {
        quote.likes.splice(index, 1);
        quote.likesCount -= 1;
    }

    await quote.save();
    return { likesCount: quote.likesCount, isLiked: index === -1 };
};