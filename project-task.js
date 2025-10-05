// Identified syntax errors
//1. "checkInDate": "2024-05-15" : Missing comma between two properties. JSON require comma between key-value pairs.

//2. name: "Alice Johnson", : Missing double quotes, In JSON, key must ne in double quotes. 

//3. "age": undefined, : JSON does not support undefined. JSON support string, number, boolean, null, objects and array.
// we can use null instead of undefined.

// 4. "email": "bob.smith@example" : Invalid email address. Should be bob.smith@example.com

// 5. "amenities": ["WiFi", "Breakfast", "Parking",] : Extra commas after "Parking". Must be "Parking" without a comma after it.

// I use https://jsonlint.com/ for json validator. 

// Corrected JSON is in "corrected-project-task.json" file and after checking my JSON, I got a message saying "JSON is valid!". 

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15"
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      name: "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": undefined,
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking",]
  }
}
`;


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

2️⃣ How did you confirm that your corrected JSON file was valid?

3️⃣ Which errors were the most difficult to spot? Why?

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
*/



