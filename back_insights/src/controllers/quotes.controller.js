
import {createQuote,getAllQuotes,getQuoteById,updateQuote,deleteQuote, searchQuotes} from "../services/quotes.service.js"

 const create = async (req, res) => {
    try {
        // req.user.id vient de ton middleware d'authentification
        const quote = await createQuote(req.body, req.user.sub);
        res.status(201).json(quote);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

 const findAll = async (req, res) => {
    try {
        const { page, limit, sort } = req.query;
        const data = await getAllQuotes(page, limit, sort);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

 const findOne = async (req, res) => {
    try {
        const quote = await getQuoteById(req.params.id);
        if (!quote) return res.status(404).json({ message: "Introuvable" });
        res.json(quote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

 const update = async (req, res) => {
    try {
        const updatedQuote = await updateQuote(req.params.id, req.user.id, req.body);
        res.json(updatedQuote);
    } catch (error) {
        res.status(403).json({ message: error.message });
    }
};

 const deleteQ = async (req, res) => {
    try {
        await deleteQuote(req.params.id, req.user.id);
        res.json({ message: "Citation supprimée" });
    } catch (error) {
        res.status(403).json({ message: error.message });
    }

};

 const search = async (req, res) => {
  const results = await searchQuotes(req.query);
  res.json(results);
};
export {
    create,
    findAll,
    findOne,
    update,
    deleteQ,
    search
}