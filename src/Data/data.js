
const products =[
    {
        id:1,
        name:'Product 1',
        image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIA6sJOg2Bp0dbapbOEKX5YBh9lFmZ3dahnD2Gg7rDEG_Xtnn_THqs6srrNAIJba62YUkg5GoXxg8zHCzq_w26sD0HYLQvkUEjR0S7hArDCGU7E0fiVGBLH_KjbR0zJchJqE5jP-9QlXU&usqp=CAc',
        price:19.9,
        description: "When it comes to choosing the perfect bag for a busy day, space is key. Throw on this adidas backpack, and carry all your gear with ease. A roomy main compartment and front and side pockets let you keep your essentials organised and accessible. Plus, it's decked out in Trefoil logo style, so you can show off your adidas love on all your daily adventures.This product is made with Primegreen, a series of high-performance recycled materials.,"
    },
    {
        id: 2,
        name: 'Product 2',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIA6sJOg2Bp0dbapbOEKX5YBh9lFmZ3dahnD2Gg7rDEG_Xtnn_THqs6srrNAIJba62YUkg5GoXxg8zHCzq_w26sD0HYLQvkUEjR0S7hArDCGU7E0fiVGBLH_KjbR0zJchJqE5jP-9QlXU&usqp=CAc',
        price: 29.99,
        description: "When it comes to choosing the perfect bag for a busy day, space is key. Throw on this adidas backpack, and carry all your gear with ease. A roomy main compartment and front and side pockets let you keep your essentials organised and accessible. Plus, it's decked out in Trefoil logo style, so you can show off your adidas love on all your daily adventures.This product is made with Primegreen, a series of high-performance recycled materials.,"
      },
      {
        id: 3,
        name: 'Product 3',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIA6sJOg2Bp0dbapbOEKX5YBh9lFmZ3dahnD2Gg7rDEG_Xtnn_THqs6srrNAIJba62YUkg5GoXxg8zHCzq_w26sD0HYLQvkUEjR0S7hArDCGU7E0fiVGBLH_KjbR0zJchJqE5jP-9QlXU&usqp=CAc',
        price: 39.99,
        description: "When it comes to choosing the perfect bag for a busy day, space is key. Throw on this adidas backpack, and carry all your gear with ease. A roomy main compartment and front and side pockets let you keep your essentials organised and accessible. Plus, it's decked out in Trefoil logo style, so you can show off your adidas love on all your daily adventures.This product is made with Primegreen, a series of high-performance recycled materials.,"
      },
      {
        id: 4,
        name: 'Product 4',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIA6sJOg2Bp0dbapbOEKX5YBh9lFmZ3dahnD2Gg7rDEG_Xtnn_THqs6srrNAIJba62YUkg5GoXxg8zHCzq_w26sD0HYLQvkUEjR0S7hArDCGU7E0fiVGBLH_KjbR0zJchJqE5jP-9QlXU&usqp=CAc',
        price: 39.99,
        description: "When it comes to choosing the perfect bag for a busy day, space is key. Throw on this adidas backpack, and carry all your gear with ease. A roomy main compartment and front and side pockets let you keep your essentials organised and accessible. Plus, it's decked out in Trefoil logo style, so you can show off your adidas love on all your daily adventures.This product is made with Primegreen, a series of high-performance recycled materials.,"
      },
      {
        id: 5,
        name: 'Product 5',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIA6sJOg2Bp0dbapbOEKX5YBh9lFmZ3dahnD2Gg7rDEG_Xtnn_THqs6srrNAIJba62YUkg5GoXxg8zHCzq_w26sD0HYLQvkUEjR0S7hArDCGU7E0fiVGBLH_KjbR0zJchJqE5jP-9QlXU&usqp=CAc',
        price: 39.99,
        description: "When it comes to choosing the perfect bag for a busy day, space is key. Throw on this adidas backpack, and carry all your gear with ease. A roomy main compartment and front and side pockets let you keep your essentials organised and accessible. Plus, it's decked out in Trefoil logo style, so you can show off your adidas love on all your daily adventures.This product is made with Primegreen, a series of high-performance recycled materials.,"
      },
      {
        id: 6,
        name: 'Product 6',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIA6sJOg2Bp0dbapbOEKX5YBh9lFmZ3dahnD2Gg7rDEG_Xtnn_THqs6srrNAIJba62YUkg5GoXxg8zHCzq_w26sD0HYLQvkUEjR0S7hArDCGU7E0fiVGBLH_KjbR0zJchJqE5jP-9QlXU&usqp=CAc',
        price: 39.99,
        description: "When it comes to choosing the perfect bag for a busy day, space is key. Throw on this adidas backpack, and carry all your gear with ease. A roomy main compartment and front and side pockets let you keep your essentials organised and accessible. Plus, it's decked out in Trefoil logo style, so you can show off your adidas love on all your daily adventures.This product is made with Primegreen, a series of high-performance recycled materials.,"
      },
      {
        id: 7,
        name: 'Product 7',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIA6sJOg2Bp0dbapbOEKX5YBh9lFmZ3dahnD2Gg7rDEG_Xtnn_THqs6srrNAIJba62YUkg5GoXxg8zHCzq_w26sD0HYLQvkUEjR0S7hArDCGU7E0fiVGBLH_KjbR0zJchJqE5jP-9QlXU&usqp=CAc',
        price: 39.99,
        description: "When it comes to choosing the perfect bag for a busy day, space is key. Throw on this adidas backpack, and carry all your gear with ease. A roomy main compartment and front and side pockets let you keep your essentials organised and accessible. Plus, it's decked out in Trefoil logo style, so you can show off your adidas love on all your daily adventures.This product is made with Primegreen, a series of high-performance recycled materials.,"
      },
      {
        id: 8,
        name: 'Product 8',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIA6sJOg2Bp0dbapbOEKX5YBh9lFmZ3dahnD2Gg7rDEG_Xtnn_THqs6srrNAIJba62YUkg5GoXxg8zHCzq_w26sD0HYLQvkUEjR0S7hArDCGU7E0fiVGBLH_KjbR0zJchJqE5jP-9QlXU&usqp=CAc',
        price: 39.99,
        description: "When it comes to choosing the perfect bag for a busy day, space is key. Throw on this adidas backpack, and carry all your gear with ease. A roomy main compartment and front and side pockets let you keep your essentials organised and accessible. Plus, it's decked out in Trefoil logo style, so you can show off your adidas love on all your daily adventures.This product is made with Primegreen, a series of high-performance recycled materials.,"
      },
      {
        id: 9,
        name: 'Product 9',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIA6sJOg2Bp0dbapbOEKX5YBh9lFmZ3dahnD2Gg7rDEG_Xtnn_THqs6srrNAIJba62YUkg5GoXxg8zHCzq_w26sD0HYLQvkUEjR0S7hArDCGU7E0fiVGBLH_KjbR0zJchJqE5jP-9QlXU&usqp=CAc',
        price: 39.99,
        description: "When it comes to choosing the perfect bag for a busy day, space is key. Throw on this adidas backpack, and carry all your gear with ease. A roomy main compartment and front and side pockets let you keep your essentials organised and accessible. Plus, it's decked out in Trefoil logo style, so you can show off your adidas love on all your daily adventures.This product is made with Primegreen, a series of high-performance recycled materials.,"
      },
      {
        id: 10,
        name: 'Product 10',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIA6sJOg2Bp0dbapbOEKX5YBh9lFmZ3dahnD2Gg7rDEG_Xtnn_THqs6srrNAIJba62YUkg5GoXxg8zHCzq_w26sD0HYLQvkUEjR0S7hArDCGU7E0fiVGBLH_KjbR0zJchJqE5jP-9QlXU&usqp=CAc',
        price: 39.99,
        description: "When it comes to choosing the perfect bag for a busy day, space is key. Throw on this adidas backpack, and carry all your gear with ease. A roomy main compartment and front and side pockets let you keep your essentials organised and accessible. Plus, it's decked out in Trefoil logo style, so you can show off your adidas love on all your daily adventures.This product is made with Primegreen, a series of high-performance recycled materials.,"
      },
]


export default products;