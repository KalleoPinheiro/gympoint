import { string, object, number } from 'yup';
import Student from '../models/StudentModel';

class StudentController {
  async store(req, res) {
    const schema = object().shape({
      name: string().required(),
      email: string()
        .email()
        .required(),
      age: number().required(),
      height: number().required(),
      weight: number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail' });
    }

    try {
      const studentExists = await Student.findOne({
        where: { email: req.body.email },
      });
      if (studentExists) {
        return res.status(400).json({ error: 'Student already exists!' });
      }

      const user = await Student.create(req.body);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: 'Failed to create!' });
    }
  }

  async update(req, res) {
    const schema = object().shape({
      name: string(),
      email: string().email(),
      age: number(),
      height: number(),
      weight: number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail' });
    }

    const { email } = req.body;

    const student = await Student.findOne({ where: { email } });

    const { id, name, age, height, weight } = await student.update(req.body);

    return res.json({ id, name, age, height, weight });
  }
}

export default new StudentController();
