export const add = (req, res) => {
  try {
    const arr = JSON.parse(req.query.arr);
    const result = arr.reduce((a, b) => a + b, 0);
    res.status(200).send(`Sum: ${result}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const subtract = (req, res) => {
  try {
    const arr = JSON.parse(req.query.arr);
    const result = arr.reduce((a, b) => a - b, 0);
    res.status(200).send(`Subtract: ${result}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const multiply = (req, res) => {
  try {
    const arr = JSON.parse(req.query.arr);
    const result = arr.reduce((a, b) => a * b);
    res.status(200).send(`Multiply: ${result}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const devide = (req, res) => {
  try {
    const arr = JSON.parse(req.query.arr);
    const result = arr.reduce((a, b) => a / b);
    res.status(200).send(`Divide: ${result}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
