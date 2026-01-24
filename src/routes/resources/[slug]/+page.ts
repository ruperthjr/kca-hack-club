export const load = async ({ params }) => {
	const { slug } = params;
	
	const resource = {
		slug,
		title: 'Programming Books Collection',
		category: 'books',
		subcategory: 'Programming',
		lastUpdated: '2026-01-15',
		content: `# Programming Books Collection

## Beginner Level
1. **Clean Code** by Robert C. Martin
   - Learn to write maintainable and elegant code
   
2. **The Pragmatic Programmer** by Andrew Hunt
   - Essential reading for every developer

3. **JavaScript: The Good Parts** by Douglas Crockford
   - Master JavaScript fundamentals

## Intermediate Level
1. **Design Patterns** by Gang of Four
   - Essential design patterns every developer should know
   
2. **You Don't Know JS** by Kyle Simpson
   - Deep dive into JavaScript

3. **Refactoring** by Martin Fowler
   - Improve existing code structure

## Advanced Level
1. **Introduction to Algorithms** by CLRS
   - Comprehensive algorithms resource
   
2. **The Art of Computer Programming** by Donald Knuth
   - The definitive guide to programming

## Web Development
1. **HTML and CSS** by Jon Duckett
2. **Eloquent JavaScript** by Marijn Haverbeke
3. **Learning React** by Alex Banks

## Download Links
All books are available in our Google Drive.`
	};

	return {
		resource,
		meta: {
			title: `${resource.title} - KCA Hack Club`,
			description: 'Access our curated programming books collection'
		}
	};
};