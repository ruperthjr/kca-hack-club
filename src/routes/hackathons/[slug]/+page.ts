export const load = async ({ params }) => {
	const { slug } = params;
	
	const hackathonData = {
		slug,
		title: 'Web3 Innovation Hackathon',
		date: '2026-02-20',
		endDate: '2026-02-22',
		location: 'Virtual (Metaverse & Online Platforms)',
		prize: 'KSh 100,000',
		description: 'Build decentralized applications and explore blockchain technology in a fully virtual, immersive hackathon experience.',
		status: 'upcoming' as const,
		content: `# Web3 Innovation Hackathon

## About
Step into the future at the Web3 Innovation Hackathon—a 48-hour virtual event hosted in the metaverse and across interactive online platforms. Collaborate with developers, designers, and entrepreneurs from around the globe, all from the comfort of your home. Experience virtual networking lounges, live mentor sessions, and real-time collaboration tools as you build groundbreaking decentralized applications (dApps) and explore the latest in blockchain technology.

## Event Details
- **Date:** February 20-22, 2026
- **Duration:** 48 hours
- **Location:** Virtual (Metaverse & Online Platforms)
- **Prize Pool:** KSh 100,000

## Themes
1. Decentralized Finance (DeFi)
2. Non-Fungible Tokens (NFTs)
3. Decentralized Autonomous Organizations (DAOs)
4. Web3 Infrastructure
5. Social Impact through Blockchain

## Virtual Experience
- **Metaverse Venue:** Attend keynotes and workshops in a 3D virtual auditorium.
- **Online Collaboration:** Use live chat, video calls, and shared whiteboards for team hacking.
- **Networking Lounges:** Meet other participants in themed virtual rooms.
- **Mentor Office Hours:** Book 1:1 sessions with experts via integrated video calls.
- **Gamified Challenges:** Earn badges and rewards for mini-challenges throughout the event.

## Schedule
### Day 1 (February 20)
- 9:00 AM - Opening Ceremony & Keynote (Metaverse Auditorium)
- 10:00 AM - Team Formation & Idea Pitching (Virtual Lounges)
- 12:00 PM - Hacking Begins (Online Collaboration Spaces)
- 1:00 PM - Lunch Break (Virtual Café)
- 6:00 PM - Dinner Break (Social VR Hangout)
- 10:00 PM - Check-in & Mentor Sessions (Video Calls)

### Day 2 (February 21)
- 8:00 AM - Breakfast (Virtual Café)
- 12:00 PM - Lunch Break
- 6:00 PM - Dinner Break
- 10:00 PM - Check-in & Mentor Sessions

### Day 3 (February 22)
- 8:00 AM - Breakfast
- 11:00 AM - Hacking Ends
- 12:00 PM - Project Submissions (Online Portal)
- 1:00 PM - Lunch & Demos (Live Stream)
- 4:00 PM - Judging (Virtual Panel)
- 6:00 PM - Awards Ceremony (Metaverse Stage)

## Prizes
- First Place: KSh 50,000
- Second Place: KSh 30,000
- Third Place: KSh 20,000
- Best Design: KSh 10,000
- Best Innovation: KSh 10,000
`,
	};

	return {
		hackathon: hackathonData,
		meta: {
			title: `${hackathonData.title} - KCA Hack Club`,
			description: `Join the ${hackathonData.title} on ${hackathonData.date} and compete for KSh 100,000 in prizes!`
		}
	};
};