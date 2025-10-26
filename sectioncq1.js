const book = { title: "Atomic Habits", author: "James Clear", pages: 320 };

const { title, author } = book;

console.log(`Book: ${title} by ${author}`);


async function simulateAPI() {
  try {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; 
        if (success) resolve("Data fetched successfully");
        else reject("Failed to fetch data");
      }, 2000);
    });
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

simulateAPI();
