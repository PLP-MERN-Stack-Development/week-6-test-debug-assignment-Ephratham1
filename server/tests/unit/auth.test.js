const { generateToken } = require('../../src/utils/auth');
const jwt = require('jsonwebtoken');

describe('generateToken', () => {
  it('returns a valid JWT token', () => {
    const user = { _id: '123' };
    const token = generateToken(user);
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');

    expect(decoded.id).toBe(user._id);
  });
});
