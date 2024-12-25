import { useState } from 'react';

const AddMenu = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productSmallPrice, setProductSmallPrice] = useState('');
  const [productLargePrice, setProductLargePrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Handle Category Submission
  const handleCategorySubmit = (e) => {
    e.preventDefault();
    const newCategory = {
      name: categoryName,
      id: categories.length + 1,
      category_description: categoryDescription,
      items: []
    };
    setCategories([...categories, newCategory]);
    setCategoryName('');
    setCategoryDescription('');
  };

  // Handle Product Submission
  const handleProductSubmit = (e) => {
    e.preventDefault();
    if (selectedCategory) {
      const newProduct = {
        name: productName,
        description: productDescription,
        prices: {
          small: parseFloat(productSmallPrice),
          large: parseFloat(productLargePrice),
        }
      };
      const updatedCategories = categories.map((category) => {
        if (category.id === selectedCategory.id) {
          return { ...category, items: [...category.items, newProduct] };
        }
        return category;
      });
      setCategories(updatedCategories);
      setProductName('');
      setProductDescription('');
      setProductSmallPrice('');
      setProductLargePrice('');
    }
  };

  // Handle file upload and parse existing JSON
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/json') {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileData = JSON.parse(event.target.result);
        if (fileData.categories) {
          setCategories(fileData.categories); // Load existing categories
        }
      };
      reader.readAsText(file);
    } else {
      alert('Please upload a valid JSON file.');
    }
  };

  // Handle downloading the updated JSON file
  const handleDownloadJSON = () => {
    const updatedData = { categories };
    const blob = new Blob([JSON.stringify(updatedData, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'updated_categories.json';
    link.click();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add Category and Products</h1>

      {/* File Upload */}
      <div className="mb-6">
        <input
          type="file"
          accept=".json"
          onChange={handleFileUpload}
          className="border p-2 rounded-md"
        />
        <p className="mt-2 text-sm">Upload your existing JSON file</p>
      </div>

      {/* Category Form */}
      <form onSubmit={handleCategorySubmit} className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add a Category</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Category Name</label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Category Description</label>
          <textarea
            value={categoryDescription}
            onChange={(e) => setCategoryDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add Category
        </button>
      </form>

      {/* Product Form */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Add Product to a Category</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Select Category</label>
          <select
            onChange={(e) => setSelectedCategory(categories.find(c => c.id === parseInt(e.target.value)))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {selectedCategory && (
          <form onSubmit={handleProductSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium">Product Name</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Product Description</label>
              <textarea
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Small Price</label>
              <input
                type="number"
                value={productSmallPrice}
                onChange={(e) => setProductSmallPrice(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Large Price</label>
              <input
                type="number"
                value={productLargePrice}
                onChange={(e) => setProductLargePrice(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Add Product
            </button>
          </form>
        )}
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownloadJSON}
        className="bg-green-500 text-white px-4 py-2 rounded-md mt-6"
      >
        Download Updated JSON
      </button>

      {/* Display Categories and Products */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Categories and Products</h2>
        {categories.map((category) => (
          <div key={category.id} className="mb-6">
            <h3 className="text-lg font-semibold">{category.name}</h3>
            <p>{category.category_description}</p>
            <ul className="list-disc pl-5">
              {category.items.map((item, index) => (
                <li key={index}>
                  <strong>{item.name}</strong> - {item.description} 
                  <br />
                  Small: ${item.prices.small} | Large: ${item.prices.large}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddMenu;
