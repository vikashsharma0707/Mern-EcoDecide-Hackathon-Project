import fs from 'fs';
import path from 'path';

const loadData = (filename) => {
  try {
    const filePath = path.join(process.cwd(), 'data', filename);
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading ${filename}:`, error.message);
    return {};
  }
};

export const searchKnowledgeBase = (query) => {
  const queryLower = query.toLowerCase();
  let context = "";

  // Load all datasets
  const products = loadData('products.json');
  const recipes = loadData('recipes.json');
  const transport = loadData('transport.json');
  const recycling = loadData('recycling.json');

  // Search Products
  if (queryLower.includes("phone") || queryLower.includes("product")) {
    context += "Product Knowledge: " + JSON.stringify(products.products?.slice(0, 3)) + "\n";
  }

  // Search Recipes
  if (queryLower.includes("recipe") || queryLower.includes("food") || queryLower.includes("dinner")) {
    context += "Recipe Knowledge: " + JSON.stringify(recipes.recipes) + "\n";
  }

  // Search Transport
  if (queryLower.includes("commute") || queryLower.includes("travel") || queryLower.includes("metro")) {
    context += "Transport Knowledge: " + JSON.stringify(transport.options) + "\n";
  }

  // Search Recycling
  if (queryLower.includes("recycle") || queryLower.includes("waste") || queryLower.includes("ewaste")) {
    context += "Recycling Knowledge: " + JSON.stringify(recycling.items) + "\n";
  }

  return context.trim();
};