import { string, object } from 'yup';
import User from '../models/UserModel';

class UserController {
  async store(req, res) {
    const schema = object().shape({
      name: string().required(),
      email: string()
        .email()
        .required(),
      password: string()
        .min(6)
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists!' });
    }

    const { id, name, email, provider } = await User.create(req.body);
    return res.json({ id, name, email, provider });
  }
}

export default new UserController();
