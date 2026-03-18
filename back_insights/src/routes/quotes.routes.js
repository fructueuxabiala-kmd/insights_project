import { Router } from 'express';

import * as QuoteController from '../controllers/quotes.controller.js';

import { requireAuth } from '../middlewares/requireAuth.js';
import { isQuoteAuthor } from '../middlewares/isQuoteAuthor.js';

const router = Router();

// --- ROUTES PUBLIQUES ---

// Récupérer toutes les citations (avec pagination/filtres en query params)
router.get('/', QuoteController.findAll);

// Récupérer une seule citation par son ID
router.get('/:id', QuoteController.findOne);


// --- ROUTES PROTÉGÉES (Nécessitent un Token) ---

// Créer une nouvelle citation
router.post('/',requireAuth, QuoteController.create);

// Modifier une citation (le service vérifie déjà si l'user est l'auteur)
router.put('/:id',requireAuth,isQuoteAuthor, QuoteController.update);

// Supprimer une citation
router.delete('/:id',requireAuth,isQuoteAuthor, QuoteController.deleteQ);

//filtrage
router.get("/search",QuoteController.search );

export default router;