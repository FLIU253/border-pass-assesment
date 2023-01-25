import { Router } from 'express';

import { router as questionsRoute } from './questions';

const router = Router();

router.use(questionsRoute);

export = router;