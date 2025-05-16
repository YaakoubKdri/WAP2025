import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
const processOperands = (req, res, next) => {
  const a = req.params.a ?? req.query.a ?? req.body.a;
  const b = req.params.b ?? req.query.b ?? req.body.b;
  const numA = Number(a), numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: 'Both a and b must be numbers' });
  }

  req.nums = { a: numA, b: numB };
  next();
};

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => b === 0 ? { error: 'Cannot divide by zero' } : a / b,
  modulus: (a, b) => b === 0 ? { error: 'Cannot modulus by zero' } : a % b
};


const createRoutes = (path, operation) => {
  app.get(`/${path}/:a/:b`, processOperands, (req, res) => {
    const result = operations[operation](req.nums.a, req.nums.b);
    res.json(Number.isFinite(result) ? { result } : result);
  });

  app.get(`/${path}`, processOperands, (req, res) => {
    const result = operations[operation](req.nums.a, req.nums.b);
    res.json(Number.isFinite(result) ? { result } : result);
  });

  app.post(`/${path}`, processOperands, (req, res) => {
    const result = operations[operation](req.nums.a, req.nums.b);
    res.json(Number.isFinite(result) ? { result } : result);
  });
};

createRoutes('addition', 'add');
createRoutes('subtraction', 'subtract');
createRoutes('multiplication', 'multiply');
createRoutes('division', 'divide');
createRoutes('modulus', 'modulus');

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(3000, () => {
  console.log('Calculator API running at http://localhost:3000');
});