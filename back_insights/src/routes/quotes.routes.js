import { Router } from 'express';
// On importe tout le controller en tant qu'objet QuoteController
import * as QuoteController from '../controllers/quotes.controller.js';
// Import du middleware d'authentification (à adapter selon ton nom de fichier)
// import { protect } from '../middleware/auth.middleware.js';

const router = Router();

// --- ROUTES PUBLIQUES ---

// Récupérer toutes les citations (avec pagination/filtres en query params)
router.get('/', QuoteController.findAll);

// Récupérer une seule citation par son ID
router.get('/:id', QuoteController.findOne);


// --- ROUTES PROTÉGÉES (Nécessitent un Token) ---

// Créer une nouvelle citation
router.post('/', QuoteController.create);

// Modifier une citation (le service vérifie déjà si l'user est l'auteur)
router.put('/:id', QuoteController.update);

// Supprimer une citation
router.delete('/:id', QuoteController.deleteQ);

// Liker / Unliker une citation
router.post('/:id/like', QuoteController.handleLike);

export default router;