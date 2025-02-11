//organizational tags
const TAGS = {
    NONE: 'N/A',
    PERSONAL: 'Personal',
    PROFESSIONAL: 'Professional',
    INPROGRESS: 'In-Progress',
    COMPLETED: 'Completed'
}

const ENGINES = {
    NONE: 'N/A',
    UE: 'Unreal Engine 5',
    PHASER: 'Phaser',
    UNITY: 'Unity',
}

const LANGUAGES = {
    NONE: 'N/A',
    CPP: 'C++',
    UEB: 'Blueprints',
    CB: 'C++ & Blueprints',
    CSRP: 'C#',
    JS: 'Javascript'
}

const ROLE = {
    NONE: 'N/A',
    LDEV: 'Lead Developer',
    DEV: 'Developer',
    LDES: 'Lead Designer',
    DES: 'Designer',
    LLVD: 'Lead Level Designer',
    LVD: 'Level Designer',
    LDD: 'Lead Developer & Designer'
}

//functional tags
const PROJECT_TAGS = {
    PERSONAL: 'Personal',
    PROFESSIONAL: 'Professional',
    UE: 'Unreal Engine 5',
    PHASER: 'Phaser',
    UNITY: 'Unity',
}
const ProjectData = [
    {
        projectName: "Wizard Wars",
        images: ["project_images/WizardWars/Village_market_final.png", "project_images/WizardWars/Village_market1_final.png", "project_images/WizardWars/VillageMap_Greybox_over.png", "project_images/WizardWars/VillageMap_over_final.png", "project_images/WizardWars/fireball.jpg", "project_images/WizardWars/iceray.jpg", "project_images/WizardWars/jump.jpg"],
        engine: ENGINES.UE,
        role: ROLE.LDD,
        summary: "An epic magical game of hide and seek!",
        status: TAGS.INPROGRESS,
        projectType: TAGS.PERSONAL,
        language: LANGUAGES.CB,
        modalBody: "Originally a way to learn more about Unreal Engine, Wizard Wars has quickly become my main focus on most days. I never intended to make a full game out of this, let alone a multiplayer game. However, I let my curiosity lead me down this path and I'm not turning back now! I have faced quite a few challenges while working on Wizard Wars. Prior to this, I was working as a game developer for web based games. The jump from JavaScript and Phaser to C++, Blueprints, and UE5 was violent. I had to learn a new engine, new tools, new frameworks, a new visual scripting language, I had to refresh my knowledge of C++, and I had to learn everything about making multiplayer games. It was a tough road, but I made it! Here I am a year later and I'm able to say that I have a pretty solid foundation to build off of. I've hosted a few small, private playtests with my friends. I know I still have a ways to go before I can really call this a full game, but I have no intentions of stopping or slowing down. I will openly admit that I have made a lot of mistakes in this project. My main one was working solely in Blueprints for most of it. I didn’t swap from Blueprints to C++ until I started implementing the Gameplay Ability System (GAS) to revamp my spell casting system. I am now in the process of refactoring a lot of the code I’ve done in Blueprints to C++ to make Wizard Wars easier to work on going forward. Regardless, this is probably my favorite project to work on, simply because I find myself learning more every time I open it up. I currently only have some screenshots to show off, but I will be sure to grab a video of it soon!",
        video: "",
        tags: [PROJECT_TAGS.PERSONAL, PROJECT_TAGS.UE],
    },
    {
        projectName: "Dungeon Raiders",
        images: [],
        engine: ENGINES.UE,
        role: ROLE.LDD,
        summary: "A quick experience exploring a dungeon!",
        status: TAGS.COMPLETED,
        projectType: TAGS.PERSONAL,
        language: LANGUAGES.CB,
        modalBody: "Dungeon Raiders is a short prototype that I made to learn a little more about C++ in Unreal Engine 5. When I first started working in Unreal Engine, I defaulted to doing everything in Blueprints. I have since learned that the best way to work in Unreal Engine is to have function in C++ and form in Blueprints. My main goal with Dungeon Raiders was to get a feel for what that would be like. This project originates from Game Dev TV's Unreal Engine C++ course, but I ended up expanding on it a bit and putting my own spin on it. The original project didn't have any sort of gameplay loop, so I added a simple one in. I also expanded on the gameplay mechanics by adding in controls to throw and rotate held objects. The README of the project on my GitHub goes deeper into what all I did compared to the original curriculum, so take a look if you are interested! Overall I think this project went really well. It took me about a week to complete it and the main thing I learned is that whatever logic I'm doing in Blueprints can pretty easily be transferred over into C++.",
        video: "",
        tags: [PROJECT_TAGS.PERSONAL, PROJECT_TAGS.UE],
    },
    {
        projectName: "Bubble Guppies: Dive Into the MET",
        images: ["project_images/MET/met_cover.png", "project_images/MET/met_menu.png", "project_images/MET/met_anim.png", "project_images/MET/met_sticker.png", "project_images/MET/met_paint.png", "project_images/MET/met_frame.png", "project_images/MET/met_gallery.png"],
        engine: ENGINES.PHASER,
        role: ROLE.LDEV,
        summary: "Create your own art at the MET!",
        status: TAGS.COMPLETED,
        projectType: TAGS.PROFESSIONAL,
        language: LANGUAGES.JS,
        modalBody: "Bubble Guppies: Dive into the MET is an educational game made in collaboration with Noggin and the MET museum. It has a simple gameplay loop where players are presented with 5 paintings from the MET that they can then learn a bit about through the Bubble Guppies. Then they can create their own painting using stickers from the artwork they just learned about and a palette inspired by it. This game has a special place in my heart because it was the first project I was the lead developer on. I learned a lot during it, but it didn’t go as smoothly as I had wanted. Right around beta, testing revealed that the game was no longer working on certain IOS devices that we were required to support. I tracked down the problem and it turned out that a new IOS update made it so WebGL was not working on some older devices, when it had been working fine previously. Pretty much all of the gameplay mechanics had been made using Phaser’s RenderTexture, which required WebGL. With the next deadline nearing, I knew the best option was going to be to scrap the RenderTexture and rebuild using raw Canvas. I was able to rebuild it in about 3 days, and honestly it looked even better than it did before. It performed better, it felt smoother, and it was a lot cleaner on the back end. The main thing I learned during this project is something I actually have taken with me through every project I’ve worked on and through life in general since then. When something goes wrong at the worst possible time, you can’t panic. The best thing you can do in those situations is reassess and keep moving forward, because you will eventually find a path through.",
        video: "",
        tags: [PROJECT_TAGS.PROFESSIONAL, PROJECT_TAGS.PHASER],
    },
    {
        projectName: "Bubble Guppies: Play House",
        images: ["project_images/Dollhouse/dollhouse_cover.png", "project_images/Dollhouse/doll_7.png", "project_images/Dollhouse/doll_6.png", "project_images/Dollhouse/doll_5.png", "project_images/Dollhouse/doll_4.png", "project_images/Dollhouse/doll_3.png", "project_images/Dollhouse/doll_2.png", "project_images/Dollhouse/doll_1.png"],
        engine: ENGINES.PHASER,
        role: ROLE.LDEV,
        summary: "Decorate and play with your own dollhouse!",
        status: TAGS.COMPLETED,
        projectType: TAGS.PROFESSIONAL,
        language: LANGUAGES.JS,
        modalBody: "Bubble Guppies: Play House is an educational sandbox game set in the Bubble Guppies universe. Players can explore 4 different rooms of a house, interact with their favorite guppies, and decorate the rooms however they want. Players can earn decorations, furniture, and even different clothes for the guppies by completing literacy minigames. This was another one of my early projects, and it also did not go as smoothly as I had hoped. Sandbox games are notoriously difficult due to the number of interactions between objects and characters. It can be really difficult to balance the desire for each prop to do something unique and cool, while still staying within scope. I ended up creating a series of basic, generalizable interactions that could be put on props of different types and then making a select number of props have special interactions. I found this to be the best way to balance out the desire for cool interactions, while staying within scope. This game actually has some pretty cool features. My favorite one is the double wide rooms. The living room and the kitchen are two screens wide, so you can scroll to see the other half. This gives you a lot more space to put decorations and play around, while also making the house feel a little more realistic. The one big challenge I faced with the scrolling was actually in the controls. The items on screen could be picked up and moved by touching them and dragging, which is also how you would scroll the screen. To help minimize the issue, I altered the controls of the props to have a slight touch and hold mechanic. It was assumed that players trying to scroll would do so with a quick touch and immediate slide motion. So I added a one or two millisecond hold requirement to the props, because again it was assumed that if a player wanted to move a prop they would be doing so a little slower than if they were scrolling. The big thing I learned with this project was the importance of balance and compromise. This project felt like a constant balancing act and we did have to compromise on quite a few things to stay in scope. Despite all that, we made a really solid and fun game, and ultimately that is what matters.",
        video: "",
        tags: [PROJECT_TAGS.PROFESSIONAL, PROJECT_TAGS.PHASER],
    },
    {
        projectName: "Blaze and the Monster Machines: Ready, Set, Repair",
        images: ["project_images/Blaze_Repair/blaRepair_cover.png", "project_images/Blaze_Repair/blaRepair_5.png", "project_images/Blaze_Repair/blaRepair_1.png", "project_images/Blaze_Repair/blaRepair_6.png", "project_images/Blaze_Repair/blaRepair_2.png", "project_images/Blaze_Repair/blaRepair_3.png", "project_images/Blaze_Repair/blaRepair_4.png",],
        engine: ENGINES.PHASER,
        role: ROLE.LDEV,
        summary: "Help run Gabby's garage in Axle City!",
        status: TAGS.COMPLETED,
        projectType: TAGS.PROFESSIONAL,
        language: LANGUAGES.JS,
        modalBody: "Blaze and the Monster Machines: Ready, Set, Repair is an educational game that takes place in the Blaze and the Monster Machines universe. Players help Gabby run her garage in Axle City by exploring three different stations; the truckwash, garage, and curbside. Players are presented with a truck that is either dirty or in need of repair. Players can then complete a literacy minigame to earn the part or tool required to complete the job. Once they have the required part/tool, they can place it in the world and complete the job. This game operates on a bit of an infinite loop, with a slight caveat. After a player completes 3 jobs at one station, there is a chance of no new truck showing up. At this point they will be prompted to visit another station to continue on. This game was a lot of fun to work on. The interactions turned out really great, just really fun and snappy with great visuals. I also got to add in some fun easter eggs to this one! On the back end of things, it was really fun to problem solve some of the issues we were having. In the truckwash there is a vacuum that needs to be moved around using the touch input. My initial solution was to hook up an IK system that would respond to player input, but I wasn’t able to get it figured out in time. So I set that aside and drew a Bezier curve to the screen that was the same color as the static asset and just attached the vacuum head to it and updated the point as the touch input moved. This was a faster and better option at the time. It achieved the goal of having an interactable vacuum, but it wasn’t the solution I really wanted. One really good tool that came out of this project though was the first draft of my Narrator class. It is actually utilized by the Gabby asset in the popup screen. At this time it was a little rough to use, hence it being a first draft. However, it did speed up the implementation of lipflap a bit and really got me into creating useful classes that could speed up the more tedious parts of game development. I would say the big thing that I learned from this project is that it’s okay to set good ideas aside when you don’t have the time to figure them out right away. I really wanted the IK system to work, but there just wasn’t enough time to figure it out properly. It was disappointing at the time, but the very next project I worked on, I got it working and it was a focal point of that project.",
        video: "",
        tags: [PROJECT_TAGS.PROFESSIONAL, PROJECT_TAGS.PHASER],
    },
    {
        projectName: "Rubble & Crew: Ruff, Ruff, Repair",
        images: ["project_images/Rubble/rubble_cover.png", "project_images/Rubble/rubble_1.png", "project_images/Rubble/rubble_2.png", "project_images/Rubble/rubble_4.png", "project_images/Rubble/rubble_3.png",],
        engine: ENGINES.PHASER,
        role: ROLE.LDEV,
        summary: "Help Rubble & Crew repair Builder Cove!",
        status: TAGS.COMPLETED,
        projectType: TAGS.PROFESSIONAL,
        language: LANGUAGES.JS,
        modalBody: "Rubble & Crew: Ruff, Ruff, Repair is an educational game that takes place in the Paw Patrol/Rubble & Crew universe. Players help Rubble and his family repair various buildings across Builder’s Cove after Speed Meister’s attempt at repairs falls flat. This game follows a similar loop to many of the other games I’ve made. Players are presented with a repair at the building that requires certain tools or items, and they have to complete a literacy minigame to earn them. After they earn the required item, they can help the crew complete the repair. This game operates on an infinite loop. There are nine total buildings that can be repaired, but at the start players are presented with five random options. After completing one building, a new random building is in need of repair. This project allowed me to revisit an idea that I had to set aside in a previous project. For this game, the characters have tools that come out of their backpacks and we wanted players to be able to interact with those tools. To do this, I needed to develop an IK controller system so players could manipulate parts of these animated characters. This was something that I had tried to do in a Blaze and the Monster Machines: Ready, Set, Repair, but I had failed to figure out a proper solution in time. This time around I was able to get it up and running very quickly. It turns out my previous solution wasn’t that far off, it just needed a little bit of tweaking and it was good to go! Most of this project went really smoothly and that actually allowed me to greatly improve on my Narrator class  that I had started during Blaze and the Monster Machines: Ready, Set, Repair. The first draft was a little difficult to use, but I fixed it up. Made it a little more intuitive to use and added a ton of comments so it was easy to understand. Then I took it one step further and added auto silence detection. This greatly improved the look of the lipflap, because it now accounted for natural pauses in speech. It also greatly reduced the amount of time required to implement lipflap. Overall this was a really great project, and I’m very proud of how it turned out. I think the main thing I learned during this project is that there is always room for improvement. It’s important to keep iterating on things even if they work fine as is because you might find that there is a better way.",
        video: "",
        tags: [PROJECT_TAGS.PROFESSIONAL, PROJECT_TAGS.PHASER],
    },
    {
        projectName: "Blaze and the Monster Machines: Sports Day",
        images: ["project_images/Blaze_Sports/blaSport_cover.png", "project_images/Blaze_Sports/blaSport_2.png", "project_images/Blaze_Sports/blaSport_1.png", "project_images/Blaze_Sports/blaSport_3.png"],
        engine: ENGINES.PHASER,
        role: ROLE.LDEV,
        summary: "Try out sports with Blaze and friends!",
        status: TAGS.COMPLETED,
        projectType: TAGS.PROFESSIONAL,
        language: LANGUAGES.JS,
        modalBody: "Blaze and the Monster Machines: Sports Day is a suite of five sports themed minigames. Players can pick between baseball, basketball, soccer, hockey, and pickleball, and compete head to head against their friends in co-play mode or compete against their favorite monster machines in solo play. This game was so much fun to work on, I love the way the interactions turned out and it is genuinely a fun game to play. It was so much fun that we even had a little in house pickleball tournament using this game with the speed cap removed. I was also able to add a little easter egg in the form of a pair of birds on the fence in the baseball minigame. The red and yellow birds are a nod to the Rochester Red Wings mascots, Spike and Mittsy. The ultimate goal of this game was to loosely introduce kids to the concept of physics. To achieve this we needed to mimic physics responses without actually using a physics engine. We couldn’t use a physics engine, because it would have required the use of WebGL, which would not have been supported on some of the devices we were required to support. It wasn’t an issue for most of the games, but hockey was a bit of a challenge. Hockey had a lot of elements that the player could bounce the puck off of; side bumpers, the goalie, and a center bumper. When the puck hit something, it needed to bounce off it in a realistic way. I ended up achieving this by raycasting and calculating the angle of the bounce from that hit point and casting another ray at that angle. This all happened right before the puck asset was launched,which gave the puck a path to follow. This system worked pretty well since it accounted for any additional hits it may run into. So if the puck bounced off a bumper and then hit the goalie, it would be able to bounce off both the bumper and the goalie without issue. Overall, I’m super proud of how this game turned out. The main thing I learned on this project was the importance of game feel. This game looks great visually and plays super well, but there was a time early on where it felt off. The game felt just kind of bad for a little bit, but through trial and error we got it feeling better. Going forward, game feel is something that I’m going to be focusing on early because it can really make or break a game.",
        video: "",
        tags: [PROJECT_TAGS.PROFESSIONAL, PROJECT_TAGS.PHASER],
    },
];

//project data template
/*
    {
        projectName: "",
        images: [],
        engine: ENGINES.NONE,
        role: ROLE.NONE,
        summary: "",
        status: TAGS.NONE,
        projectType: TAGS.NONE,
        language: LANGUAGES.NONE,
        modalBody: "",
        video: "",
        tags: [],
    },
 */


export {
    ProjectData,
    PROJECT_TAGS
} 