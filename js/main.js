let meals = [
  // BURGER
  {
    name: "Classic Beef Burger",
    image: "../images/burger.jpg",
    description:
      "Juicy homemade burger with all the fixings and perfectly melted cheese.",

    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",

    difficulty: "Easy",
    cuisine: "American",
    rating: "4.6",
    reviews: "421",

    ingredients: [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion, sliced",
      "Pickles",
      "Burger sauce or condiments",
    ],

    instructions: [
      "Divide ground beef into 4 equal portions and form into patties.",
      "Season patties generously with salt and pepper.",
      "Cook patties for 4-5 minutes per side over high heat.",
      "Add cheese slices in the final minute and cover to melt.",
      "Toast burger buns lightly before serving.",
    ],

    nutrition: [
      "Calories:650 kcal",
      "Protein:38g",
      "Carbohydrates:42g",
      "Fat:35g",
      "Fiber:2g",
      "Sodium:920mg",
    ],

    tips: [
      "Don't press down on burgers while cooking.",
      "Make a small indent in the center to prevent puffing.",
      "Let patties rest before serving.",
      "Toast buns for better flavor and texture.",
    ],
  },

  // CAESAR SALAD
  {
    name: "Caesar Salad",
    image: "../images/caesar-salad.jpg",
    description: "Classic salad with crispy romaine and creamy dressing.",

    prepTime: "15 min",
    cookTime: "0 min",
    servings: "2 people",

    difficulty: "Easy",
    cuisine: "Italian",
    rating: "4.2",
    reviews: "210",

    ingredients: [
      "1 large romaine lettuce",
      "1/2 cup Caesar dressing",
      "1/2 cup parmesan cheese",
      "1 cup croutons",
      "Black pepper",
    ],

    instructions: [
      "Wash and cut lettuce.",
      "Mix with dressing.",
      "Add croutons and cheese.",
    ],

    nutrition: [
      "Calories:320 kcal",
      "Protein:12g",
      "Carbohydrates:18g",
      "Fat:22g",
      "Fiber:3g",
      "Sodium:680mg",
    ],

    tips: ["Use cold lettuce for crunch.", "Don’t add dressing early."],
  },

  // FRENCH ONION SOUP
  {
    name: "French Onion Soup",
    image: "../images/french-onion-soup.jpg.jpg",
    description: "Rich beef broth with caramelized onions and melted cheese.",

    prepTime: "15 min",
    cookTime: "60 min",
    servings: "4 people",

    difficulty: "Medium",
    cuisine: "French",
    rating: "4.7",
    reviews: "560",

    ingredients: [
      "4 onions",
      "Butter",
      "Beef broth",
      "White wine",
      "Baguette",
      "Gruyère cheese",
    ],

    instructions: [
      "Caramelize onions slowly.",
      "Add broth and simmer.",
      "Top with bread and cheese.",
      "Broil until golden.",
    ],

    nutrition: [
      "Calories:380 kcal",
      "Protein:18g",
      "Carbohydrates:36g",
      "Fat:18g",
      "Fiber:4g",
      "Sodium:980mg",
    ],

    tips: ["Take your time caramelizing onions.", "Use good broth."],
  },

  // TERIYAKI CHICKEN
  {
    name: "Teriyaki Chicken Bowl",
    image: "../images/teriyaki-chicken-bowl.jpg.jpg",
    description: "Sweet and savory chicken over rice.",

    prepTime: "15 min",
    cookTime: "20 min",
    servings: "2 people",

    difficulty: "Easy",
    cuisine: "Asian",
    rating: "4.5",
    reviews: "330",

    ingredients: [
      "Chicken thighs",
      "Teriyaki sauce",
      "Rice",
      "Broccoli",
      "Carrots",
      "Sesame seeds",
    ],

    instructions: [
      "Cook chicken.",
      "Add sauce.",
      "Steam vegetables.",
      "Serve over rice.",
    ],

    nutrition: [
      "Calories:540 kcal",
      "Protein:42g",
      "Carbohydrates:58g",
      "Fat:14g",
      "Fiber:4g",
      "Sodium:1240mg",
    ],

    tips: ["Use chicken thighs for juiciness.", "Make sauce at home."],
  }, // MARGHERITA PIZZA
  {
    name: "Margherita Pizza",
    image: "../images/Margherita Pizza.jpg",

    warning:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",

    description: "Classic Italian pizza with fresh mozzarella and basil",

    prepTime: "90 min",
    cookTime: "12 min",
    servings: "2 people",

    difficulty: "Intermediate",
    cuisine: "Italian",
    rating: "4.9",
    reviews: "512",

    ingredients: [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Parmesan cheese for topping",
    ],

    instructions: [
      "Let pizza dough come to room temperature and rest for 1 hour.",
      "Preheat oven to maximum temperature (usually 250°C/480°F).",
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
      "Roll out dough on a floured surface to desired thickness.",
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
    ],

    nutrition: [
      "Calories:580 kcal",
      "Protein:24g",
      "Carbohydrates:68g",
      "Fat:22g",
      "Fiber:4g",
      "Sodium:920mg",
    ],

    tips: [
      "Use a pizza stone for crispier crust",
      "Don't overload with toppings - less is more",
      "Add basil after baking to keep it fresh",
      "Let dough rest properly for best texture",
    ],
  },

  // CHICKEN TIKKA MASALA
  {
    name: "Chicken Tikka Masala",
    image: "../images/Chicken Tikka Masala.jpg",

    warning:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",

    description: "Rich and creamy Indian curry with tender chicken pieces",

    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",

    difficulty: "Intermediate",
    cuisine: "Asian",
    rating: "4.7",
    reviews: "389",

    ingredients: [
      "600g chicken breast, cubed",
      "1 cup plain yogurt",
      "2 tablespoons tikka masala paste",
      "400ml coconut cream",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "2 tablespoons ginger, grated",
      "400g canned tomatoes",
      "Fresh cilantro for garnish",
    ],

    instructions: [
      "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
      "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
      "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
      "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
    ],

    nutrition: [
      "Calories:450 kcal",
      "Protein:38g",
      "Carbohydrates:24g",
      "Fat:22g",
      "Fiber:4g",
      "Sodium:760mg",
    ],

    tips: [
      "Marinate chicken overnight for deeper flavor",
      "Use full-fat coconut cream for richest sauce",
      "Adjust spice level by varying the tikka paste amount",
      "Serve with naan bread and basmati rice",
    ],
  },

  // GREEK MOUSSAKA
  {
    name: "Greek Moussaka",
    image: "../images/Greek Moussaka.jpg",

    warning:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",

    description: "Traditional layered eggplant casserole with lamb",

    prepTime: "30 min",
    cookTime: "60 min",
    servings: "4 people",

    difficulty: "Intermediate",
    cuisine: "Mediterranean",
    rating: "4.8",
    reviews: "234",

    ingredients: [
      "3 large eggplants, sliced",
      "500g ground lamb",
      "400g canned tomatoes",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "500ml béchamel sauce",
      "100g parmesan cheese",
      "Cinnamon and oregano",
      "Olive oil",
    ],

    instructions: [
      "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
      "Brush eggplant slices with olive oil, grill or bake until softened.",
      "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
      "Preheat oven to 180°C (350°F).",
      "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
      "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
    ],

    nutrition: [
      "Calories:580 kcal",
      "Protein:36g",
      "Carbohydrates:32g",
      "Fat:32g",
      "Fiber:8g",
      "Sodium:820mg",
    ],

    tips: [
      "Salt eggplant to remove bitterness",
      "Don't skip the resting time - it helps set the layers",
      "Use ground beef if lamb is unavailable",
      "Make ahead and reheat for easier serving",
    ],
  },

  // LASAGNA BOLOGNESE
  {
    name: "Lasagna Bolognese",
    image: "../images/Lasagna Bolognese.jpg",

    warning:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",

    description: "Layered Italian pasta with rich meat sauce and béchamel",

    prepTime: "30 min",
    cookTime: "90 min",
    servings: "4 people",

    difficulty: "Intermediate",
    cuisine: "Italian",
    rating: "4.9",
    reviews: "478",

    ingredients: [
      "12 lasagna sheets",
      "500g ground beef",
      "400g canned tomatoes",
      "1 onion, diced",
      "2 carrots, diced",
      "500ml béchamel sauce",
      "200g mozzarella, grated",
      "100g parmesan cheese",
      "Fresh basil",
    ],

    instructions: [
      "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
      "Cook lasagna sheets according to package directions. Drain and set aside.",
      "Preheat oven to 180°C (350°F).",
      "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
      "Top final layer with béchamel, mozzarella, and parmesan cheese.",
      "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving.",
    ],

    nutrition: [
      "Calories:680 kcal",
      "Protein:42g",
      "Carbohydrates:58g",
      "Fat:28g",
      "Fiber:6g",
      "Sodium:920mg",
    ],

    tips: [
      "Make bolognese sauce a day ahead for better flavor",
      "Don't skip the resting time after baking",
      "Use fresh pasta sheets for best texture",
      "Freeze leftovers in individual portions",
    ],
  },

  // MEDITERRANEAN QUINOA BOWL
  {
    name: "Mediterranean Quinoa Bowl",
    image: "../images/Mediterranean Quinoa Bowl.jpg",

    warning:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",

    description: "Healthy bowl with quinoa, vegetables, and tahini dressing",

    prepTime: "20 min",
    cookTime: "35 min",
    servings: "2 people",

    difficulty: "Easy",
    cuisine: "Mediterranean",
    rating: "4.5",
    reviews: "156",

    ingredients: [
      "1 cup quinoa",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red onion, sliced",
      "Kalamata olives",
      "Feta cheese, crumbled",
      "Fresh parsley",
      "Tahini dressing",
    ],

    instructions: [
      "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
      "While quinoa cooks, prepare all vegetables and set aside.",
      "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
      "Fluff cooked quinoa with a fork and let cool slightly.",
      "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
      "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.",
    ],

    nutrition: [
      "Calories:480 kcal",
      "Protein:18g",
      "Carbohydrates:58g",
      "Fat:20g",
      "Fiber:10g",
      "Sodium:540mg",
    ],

    tips: [
      "Rinse quinoa well to remove bitter coating",
      "Let quinoa cool before adding fresh ingredients",
      "Make extra tahini dressing - it keeps well in the fridge",
      "Add grilled chicken or chickpeas for extra protein",
    ],
  }, // HONEY GARLIC SALMON
  {
    name: "Honey Garlic Salmon",
    image: "../images/Honey Garlic Salmon..jpg",

    description: "Pan-seared salmon with a sweet and savory glaze",

    prepTime: "10 min",
    cookTime: "15 min",
    servings: "2 people",

    difficulty: "Easy",
    cuisine: "Seafood",
    rating: "4.9",
    reviews: "187",

    ingredients: [
      "2 salmon fillets (6oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon olive oil",
      "1 teaspoon fresh ginger, grated",
      "Sesame seeds for garnish",
      "Green onions, sliced",
    ],

    instructions: [
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
    ],

    nutrition: [
      "Calories:380 kcal",
      "Protein:35g",
      "Carbohydrates:28g",
      "Fat:14g",
      "Fiber:0g",
      "Sodium:720mg",
    ],

    tips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],
  },

  // CREAMY SPAGHETTI CARBONARA
  {
    name: "Creamy Spaghetti Carbonara",
    image: "../images/Creamy Spaghetti Carbonara.jpg",

    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",

    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",

    difficulty: "Easy",
    cuisine: "Italian",
    rating: "4.8",
    reviews: "234",

    ingredients: [
      "400g spaghetti pasta",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt for pasta water",
    ],

    instructions: [
      "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
      "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
      "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
      "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
      "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!",
    ],

    nutrition: [
      "Calories:520 kcal",
      "Protein:28g",
      "Carbohydrates:62g",
      "Fat:18g",
      "Fiber:3g",
      "Sodium:680mg",
    ],

    tips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only",
    ],
  },

  // CAPRESE SANDWICH
  {
    name: "Caprese Sandwich",
    image: "../images/Caprese Sandwich.jpg",

    description: "Fresh Italian sandwich with mozzarella, tomato, and basil",

    prepTime: "10 min",
    cookTime: "5 min",
    servings: "2 people",

    difficulty: "Easy",
    cuisine: "Italian",
    rating: "4.5",
    reviews: "189",

    ingredients: [
      "1 ciabatta bread",
      "200g fresh mozzarella, sliced",
      "2 large tomatoes, sliced",
      "Fresh basil leaves",
      "3 tablespoons pesto",
      "2 tablespoons balsamic glaze",
      "Olive oil",
      "Salt and pepper",
    ],

    instructions: [
      "Slice ciabatta bread in half horizontally.",
      "Toast bread lightly until just crispy.",
      "Spread pesto on both sides of bread.",
      "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
      "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
      "Close sandwich, cut in half, and serve immediately.",
    ],

    nutrition: [
      "Calories:480 kcal",
      "Protein:22g",
      "Carbohydrates:48g",
      "Fat:22g",
      "Fiber:3g",
      "Sodium:680mg",
    ],

    tips: [
      "Use ripe, in-season tomatoes for best flavor",
      "Buffalo mozzarella is traditional but harder to slice",
      "Toast bread lightly - not too crispy",
      "Add prosciutto or salami for a heartier sandwich",
    ],
  }, // THAI GREEN CURRY
  {
    name: "Thai Green Curry",
    image: "../images/Thai Green Curry.jpg",

    description: "Vibrant and aromatic curry with vegetables and coconut milk",

    prepTime: "15 min",
    cookTime: "25 min",
    servings: "4 people",

    difficulty: "Intermediate",
    cuisine: "Asian",
    rating: "4.7",
    reviews: "312",

    ingredients: [
      "2 tablespoons green curry paste",
      "400ml coconut milk",
      "300g chicken breast, sliced",
      "1 red bell pepper, sliced",
      "100g green beans",
      "1 eggplant, cubed",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Fresh Thai basil leaves",
    ],

    instructions: [
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
      "Add half the coconut milk and stir to combine with the curry paste.",
      "Add sliced chicken and cook until no longer pink, about 5 minutes.",
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
      "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
      "Stir in fresh Thai basil leaves. Serve hot with jasmine rice.",
    ],

    nutrition: [
      "Calories:420 kcal",
      "Protein:26g",
      "Carbohydrates:22g",
      "Fat:26g",
      "Fiber:5g",
      "Sodium:890mg",
    ],

    tips: [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce",
    ],
  },

  // PAD THAI
  {
    name: "Pad Thai",
    image: "../images/Pad Thai.jpg",

    description: "Popular Thai stir-fried noodles with shrimp and peanuts",

    prepTime: "20 min",
    cookTime: "15 min",
    servings: "2 people",

    difficulty: "Intermediate",
    cuisine: "Asian",
    rating: "4.8",
    reviews: "445",

    ingredients: [
      "200g rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "3 tablespoons tamarind paste",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Bean sprouts",
      "Crushed peanuts",
      "Lime wedges and cilantro",
    ],

    instructions: [
      "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
      "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
      "Heat wok over high heat. Scramble eggs and set aside.",
      "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
      "Add scrambled eggs and bean sprouts. Toss everything together.",
      "Serve topped with crushed peanuts, lime wedges, and cilantro.",
    ],

    nutrition: [
      "Calories:540 kcal",
      "Protein:32g",
      "Carbohydrates:62g",
      "Fat:16g",
      "Fiber:4g",
      "Sodium:1120mg",
    ],

    tips: [
      "Don't oversoak noodles or they'll be mushy",
      "Cook on high heat for authentic wok flavor",
      "Balance sweet, sour, and salty flavors",
      "Prepare all ingredients before starting to cook",
    ],
  },

  // CHICKEN STIR-FRY
  {
    name: "Chicken Stir-Fry",
    image: "../images/Chicken Stir-Fry.jpg",

    description: "Quick and healthy stir-fry with colorful vegetables",

    prepTime: "15 min",
    cookTime: "15 min",
    servings: "4 people",

    difficulty: "Easy",
    cuisine: "Asian",
    rating: "4.5",
    reviews: "324",

    ingredients: [
      "500g chicken breast, sliced",
      "2 bell peppers, sliced",
      "1 broccoli head, florets",
      "2 carrots, julienned",
      "3 tablespoons soy sauce",
      "2 tablespoons oyster sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "Fresh ginger, grated",
    ],

    instructions: [
      "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
      "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
      "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
      "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
      "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
      "Serve immediately over steamed rice or noodles.",
    ],

    nutrition: [
      "Calories:320 kcal",
      "Protein:34g",
      "Carbohydrates:18g",
      "Fat:12g",
      "Fiber:5g",
      "Sodium:840mg",
    ],

    tips: [
      "Cut all ingredients before starting to cook",
      "Keep heat high for authentic stir-fry texture",
      "Don't overcrowd the wok or vegetables will steam",
      "Add cashews or peanuts for extra crunch",
    ],
  },

  // BEEF TACOS
  {
    name: "Beef Tacos",
    image: "../images/Beef Tacos.jpg",

    description: "Flavorful Mexican tacos with seasoned ground beef",

    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",

    difficulty: "Easy",
    cuisine: "American",
    rating: "4.6",
    reviews: "278",

    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 tablespoons taco seasoning",
      "Shredded lettuce",
      "Diced tomatoes",
      "Shredded cheddar cheese",
      "Sour cream",
      "Salsa",
    ],

    instructions: [
      "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
      "Add diced onion and cook until softened, about 5 minutes.",
      "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
      "Warm taco shells according to package directions.",
      "Fill each shell with seasoned beef.",
    ],

    nutrition: [
      "Calories:420 kcal",
      "Protein:26g",
      "Carbohydrates:32g",
      "Fat:20g",
      "Fiber:4g",
      "Sodium:780mg",
    ],

    tips: [
      "Drain excess fat from beef for healthier tacos",
      "Warm shells in oven for better texture",
      "Prepare all toppings before cooking beef",
      "Use ground turkey for a lighter option",
    ],
  },

  // BBQ PULLED PORK
  {
    name: "BBQ Pulled Pork",
    image: "../images/BBQ Pulled Pork.jpg",

    warning:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",

    description: "Slow-cooked tender pork in smoky barbecue sauce",

    prepTime: "15 min",
    cookTime: "240 min",
    servings: "4 people",

    difficulty: "Easy",
    cuisine: "American",
    rating: "4.7",
    reviews: "412",

    ingredients: [
      "1kg pork shoulder",
      "1 cup BBQ sauce",
      "1/2 cup apple cider vinegar",
      "2 tablespoons brown sugar",
      "1 tablespoon paprika",
      "1 tablespoon garlic powder",
      "Burger buns",
      "Coleslaw for serving",
    ],

    instructions: [
      "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
      "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
      "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
      "Remove pork and shred with two forks. Discard excess fat.",
      "Return shredded pork to slow cooker, mix with BBQ sauce.",
      "Serve on toasted buns with coleslaw on top.",
    ],

    nutrition: [
      "Calories:620 kcal",
      "Protein:48g",
      "Carbohydrates:52g",
      "Fat:22g",
      "Fiber:3g",
      "Sodium:1180mg",
    ],

    tips: [
      "Use pork shoulder for best results - it stays moist",
      "Let pork rest before shredding for juicier meat",
      "Make your own BBQ sauce for better flavor",
      "Leftovers freeze well for up to 3 months",
    ],
  },
];

// ELEMENTS

let mealName = document.getElementById("mealName");
let mealImage = document.getElementById("mealImage");
let mealDesc = document.getElementById("mealDesc");

let prepTime = document.getElementById("prepTime");
let cookTime = document.getElementById("cookTime");
let servings = document.getElementById("servings");

let mealRating = document.getElementById("mealRating");
let mealReviews = document.getElementById("mealReviews");
let mealDifficulty = document.getElementById("mealDifficulty");
let mealCuisine = document.getElementById("mealCuisine");

let ingredientsList = document.getElementById("ingredientsList");
let warningBox = document.getElementById("warningBox");
let warningText = document.getElementById("warningText");
let currentMeal;

// DISPLAY RANDOM MEAL

let shuffledMeals = [...meals];

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
function displayRandomMeal() {
  if (shuffledMeals.length === 0) {
    shuffledMeals = [...meals];
    shuffleArray(shuffledMeals);
  }

  currentMeal = shuffledMeals.pop();
  mealName.innerHTML = currentMeal.name;
  mealImage.src = currentMeal.image;
  mealDesc.innerHTML = currentMeal.description;

  prepTime.innerHTML = currentMeal.prepTime;
  cookTime.innerHTML = currentMeal.cookTime;
  servings.innerHTML = currentMeal.servings;

  mealRating.innerHTML = currentMeal.rating;
  mealReviews.innerHTML = currentMeal.reviews;
  mealDifficulty.innerHTML = currentMeal.difficulty;
  mealCuisine.innerHTML = currentMeal.cuisine;
  // WARNING

  if (currentMeal.warning) {
    warningBox.style.display = "flex";
    warningText.innerHTML = currentMeal.warning;
  } else {
    warningBox.style.display = "none";
  }
  showTab("ingredients", document.querySelector(".tab"));
}

// SHOW TAB

function showTab(type, element) {
  let items = "";
  let box = document.querySelector(".ingredients-box");

  box.classList.remove("instructions-style", "nutrition-style");

  if (type === "ingredients") {
    for (let i = 0; i < currentMeal.ingredients.length; i++) {
      items += `
        <li class="ingredient-item">
          <span class="ingredient-number">${i + 1}</span>
          <span class="ingredient-text">${currentMeal.ingredients[i]}</span>
        </li>
      `;
    }
  } else if (type === "instructions") {
    box.classList.add("instructions-style");

    for (let i = 0; i < currentMeal.instructions.length; i++) {
      items += `
        <li class="instruction-item">
          <div class="instruction-number">${i + 1}</div>
          <div class="instruction-text">${currentMeal.instructions[i]}</div>
        </li>
      `;
    }
  } else if (type === "nutrition") {
    box.classList.add("nutrition-style");

    let icons = [
      "fa-fire",
      "fa-dumbbell",
      "fa-wheat-awn",
      "fa-droplet",
      "fa-seedling",
      "fa-cube",
    ];

    for (let i = 0; i < currentMeal.nutrition.length; i++) {
      let data = currentMeal.nutrition[i].split(":");

      items += `
        <div class="nutrition-card">
          <div class="nutrition-left">
            <div class="nutrition-icon">
              <i class="fa-solid ${icons[i]}"></i>
            </div>
            <span class="nutrition-name">${data[0]}</span>
          </div>
          <span class="nutrition-value">${data[1]}</span>
        </div>
      `;
    }
  } else if (type === "tips") {
    for (let i = 0; i < currentMeal.tips.length; i++) {
      items += `
        <li class="tip-item">
          <div class="tip-icon">
            <i class="fa-solid fa-check"></i>
          </div>
          <span class="tip-text">${currentMeal.tips[i]}</span>
        </li>
      `;
    }
  }

  ingredientsList.innerHTML = items;

  let tabs = document.querySelectorAll(".tab");
  tabs.forEach((t) => t.classList.remove("active"));
  element.classList.add("active");
}

// BUTTON

document
  .getElementById("randomBtn")
  .addEventListener("click", displayRandomMeal);

// FIRST LOAD

displayRandomMeal();
