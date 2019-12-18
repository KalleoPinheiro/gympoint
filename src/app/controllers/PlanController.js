import { number, object, string } from 'yup';
import Plan from '../models/PlanModel';

class PlanController {
  async store(req, res) {
    const schema = object().shape({
      title: string().required(),
      duration: string().required(),
      price: number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail' });
    }

    const plan = await Plan.create(req.body);
    return res.status(201).json(plan);
  }

  async list(_, res) {
    const plans = await Plan.findAll();
    return res.status(201).json(plans);
  }

  async update(req, res) {
    const schema = object().shape({
      title: string().required(),
      duration: string().required(),
      price: number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail' });
    }

    try {
      const plan = await Plan.findByPk(req.params.id);
      await plan.update(req.body);
      return res.status(201).json(plan);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async remove(req, res) {
    try {
      const plan = await Plan.findByPk(req.params.id);
      await plan.destroy();
      return res.status(200).json({ message: 'Deleted with suscessfully' });
    } catch (error) {
      return res.status(400).json({ error: "Can't remove this plan..." });
    }
  }
}

export default new PlanController();
