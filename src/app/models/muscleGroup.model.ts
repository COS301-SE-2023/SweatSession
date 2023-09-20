export interface Video {
    url: string;
    exerciseName: string;
    difficulty: string;
    instructions: string[]
}

export interface MuscleGroup {
    [group: string]: Video[];
}


export const MUSCLE_GROUP_DATA: MuscleGroup = {
    biceps: [
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-curl-side.mp4#t=0.1",
            exerciseName: "Barbell Curl ",
            difficulty: "Beginner",
            instructions: ["While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out.", "Continue the movement until your biceps are fully contracted and the bar is at shoulder level.", "Hold the contracted position for a second and squeeze the biceps hard.", "Slowly bring the weight back down to the starting position."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-chinup-front.mp4#t=0.1",
            exerciseName: "Chin Ups",
            difficulty: "Intermediate",
            instructions: ["Grab the bar shoulder width apart with a supinated grip (palms facing you)", "With your body hanging and arms fully extended, pull yourself up until your chin is past the bar.", "Slowly return to starting position.", "Repeat."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-curl-side.mp4#t=0.1",
            exerciseName: "Dumbbell Hammer Curl",
            difficulty: "Beginner",
            instructions: ["Hold the dumbbells with a neutral grip (thumbs facing the ceiling).", "Slowly lift the dumbbell up to chest height", "Return to starting position and repeat."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-biceps-stretch-variation-1-side.mp4#t=0.1",
            exerciseName: "Biceps Stretch",
            difficulty: "Beginner",
            instructions: ["Stand one foot in front of the other with the wall to your right, an arms width away.", "Place your hand on the wall, fingers pointing away from you.", "Gently lean forward, keeping your hand stationary.", "Repeat with the other arm."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-cable-hammer-curl-side.mp4#t=0.1",
            exerciseName: "Cable Twisting Curl",
            difficulty: "Advanced",
            instructions: ["Use a handle attachment. The cable should be set all the way to the bottom of the machine.", "Face away from the cable machine. Stagger your stance so you have a better base of support.", "Start with a neutral grip. Flex at the elbow. While flexing twist your palm. When you hit the top of the movement your palm should be facing upward."]
        },
    ],
    traps: [
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-shrug-side.mp4#t=0.1",
            exerciseName: "Dumbbell Seated Shrug",
            difficulty: "Beginner",
            instructions: ["Sit on a bench with dumbbells in both hands, palms facing your body, back straight.", "Elevate your shoulders and hold the contracted position at the apex of the motion.", "Slowly lower your shoulders back to starting position."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-silverback-shrug-side.mp4#t=0.1",
            exerciseName: "Barbell Silverback Shrug",
            difficulty: "Intermediate",
            instructions: ["Stand with your feet shoulder width apart holding the Barbell with both hands in front just past shoulder width.", "Bend forward at the hips with a slight bend in your knees, keeping your back straight.", "Engage your shoulder blades, as if you are trying to touch them together.", "Release the shrug."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-upright-row-side.mp4#t=0.1",
            exerciseName: "Barbell Upright Row",
            difficulty: "Advanced",
            instructions: ["Take a double overhand roughly shoulder width grip.", "Pull your elbows straight up the ceiling. Aim to get the bar to chin level or slightly higher."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-traps-stretch-variation-1-front.mp4#t=0.1",
            exerciseName: "Traps Stretch",
            difficulty: "Beginner",
            instructions: ["Stand upright with your feet shoulder width apart.", "Place your left hand on your head and gently pull your head down towards your left shoulder. Then return to centre point.", "Repeat, using your right hand pulling towards your right shoulder."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pike-pushup-side.mp4#t=0.1",
            exerciseName: "Elevated Pike Press",
            difficulty: "Intermediate",
            instructions: ["Use a bench or an object to elevate your feet.", "Lower your head towards the floor by bending your elbows.", "Push through your hands and return to the starting pike position.", "Repeat."]
        },
    ],
    deltoids: [
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-overhead-press-side_1DIUbfS.mp4#t=0.1",
            exerciseName: "Barbell Overhead Press",
            difficulty: "Intermediate",
            instructions: ["Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).", "Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.", "Press until your elbows are extended and push your head forward slightly.", "Return to the start position with control. Pulling your chin back to allow the bar to pass your face safely."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-overhead-press-front.mp4#t=0.1",
            exerciseName: "Dumbbell Seated Overhead Press",
            difficulty: "Beginner",
            instructions: ["Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.", "Raise the dumbbells upwards and pause at the contracted position.", "Lower the weights back to starting position."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-cable-lateral-raise-side.mp4#t=0.1",
            exerciseName: "Cable Lateral Raise",
            difficulty: "Beginner",
            instructions: ["Use a handle attachment with the cable set all the way to the bottom of the machine.", "You should vertically abduct at the shoulder raising your arm straight out to the side.", "Raise until your arm is parallel with the ground and then back to the starting position."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-shoulders-stretch-variation-2-side.mp4#t=0.1",
            exerciseName: "Shoulders Stretch",
            difficulty: "Beginner",
            instructions: ["Start with your arms at either side. Begin by pushing your shoulders forward and in towards your chest.", "Continue the circular motion with your shoulders, pinching up towards your ears, and then extending your chest outwards while you finish the motion.", "Repeat as necessary."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-elevated-pike-shrug-front.mp4#t=0.1",
            exerciseName: "Elevated Pike Shoulder Shrug",
            difficulty: "Beginner",
            instructions: ["Use a bench or an object like a chair to elevate your feet.", "Slowly lower your body (scapula) while keeping your elbows locked (this is key)", "Slowly raise your body back to the start position."]
        },
    ],
    pectoral : [
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pushup-side.mp4#t=0.1",
            exerciseName: "Push Up",
            difficulty: "Beginner",
            instructions: ["Place your hands firmly on the ground, directly under shoulders.", "Flatten your back so your entire body is straight and slowly lower your body", "Draw shoulder blades back and down, keeping elbows tucked close to your body", "Exhale as you push back to the starting position."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-dips-front.mp4#t=0.1",
            exerciseName: "Dips",
            difficulty: "Intermediate",
            instructions: ["Hold your body with arms locked above the equipment.", "Lower your body slowly while leaning forward, flare out your elbows.", "Raise your body above the bars until your arms are locked."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-bench-press-front.mp4#t=0.1",
            exerciseName: "Barbell Bench Press",
            difficulty: "Intermediate",
            instructions: ["Lay flat on the bench with your feet on the ground. With straight arms unrack the bar.", "Lower the bar to your mid chest.", "Raise the bar until you've locked your elbows."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-incline-bench-press-front_dogC7vG.mp4#t=0.1",
            exerciseName: "Barbell Incline Bench Press",
            difficulty: "Intermediate",
            instructions: ["Position the bench between 30 and 45 degrees.", "Lay flat on the bench with your feet on the ground. With straight arms unrack the bar.", "Lower the bar to your mid chest", "Raise the bar (slowly and controlled) until you've locked your elbows."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-cable-pec-fly-front.mp4#t=0.1",
            exerciseName: "Cable Pec Fly",
            difficulty: "Beginner",
            instructions: ["Use a handle attachment set all the way to the bottom of the machine.", "Bring both of the handles to your chest and make sure you are in the center of the cable crossover.", "Walk a few steps forward. Then press the weight forward. From there, your shoulders should horizontally abduct and adduct while your elbows stay in a fixed position."]
        }
    ],
    forearms: [
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-wrist-curl-side.mp4#t=0.1",
            exerciseName: "Dumbbell Wrist Curl",
            difficulty: "Beginner",
            instructions: ["Grip the dumbbell with your palm facing upwards with your forearm rested against the bench.", "Slowly curl your wrist upwards in a semicircular motion.", "Return to starting position and repeat."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-reverse-curl-side.mp4#t=0.1",
            exerciseName: "Barbell Reverse Curl",
            difficulty: "Advanced",
            instructions: ["Take a double overhand grip that's about shoulder width. Flex your elbows while keeping your elbows tucked in. Try not to let them flare out.", "Curl until your forearm presses into your bicep. Then fully extend your elbows at the bottom of each rep."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-forearms-stretch-variation-2-side.mp4#t=0.1",
            exerciseName: "Forearms Stretch",
            difficulty: "Beginner",
            instructions: ["Place your hand against a wall, palms facing upward, with finger tips touching.", "Slowly lean into your palm.", "Hold at the peak of the stretch.", "Return to starting position."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-cable-wrist-curl-front.mp4#t=0.1",
            exerciseName: "Cable Wrist Extension",
            difficulty: "Advanced",
            instructions: ["Use a handle attachment. The cable should be set all the way to the bottom of the machine.", "Face away from the cable machine. Stagger your stance so you have a better base of support.", "Face away from the cable machine. Stagger your stance so you have a better base of support."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-behind-the-back-wrist-curl-side.mp4#t=0.1",
            exerciseName: "Barbell Behind The Back Wrist Curl",
            difficulty: "Intermediate",
            instructions: ["Stand straight and hold the barbell behind you using a pronated grip with your hands and feet shoulder-width apart.", "Slowly curl your wrists in a semi-circular motion upwards.", "Hold the barbell at the apex of the motion and then slowly lower the barbell back down to starting position."]
        },
    ],
    abdominal: [
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-rollout-side.mp4#t=0.1",
            exerciseName: "Barbell Roll Outs",
            difficulty: "Intermediate",
            instructions: ["Hold the Barbell with both hands and kneel on the floor with your feet up", "Slowly roll the Barbell straight forward, stretching your body into a straight position.", "After a pause at the stretched position, start pulling yourself back to the starting position. This should be a slow and controlled movement."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-hand-plank-side_GnZ2NZh.mp4#t=0.1",
            exerciseName: "Hand Plank",
            difficulty: "Beginner",
            instructions: ["Start in a kneeling position with your hands planted on the ground.", "Pick your knees up off the ground. Hold in this position with a flat back."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-abdominals-stretch-variation-1-side.mp4#t=0.1",
            exerciseName: "Abdominals Stretch",
            difficulty: "Beginner",
            instructions: ["Lay on your stomach on the floor with your forearms flat on the ground.", "Extend your elbows and push your upper body upwards.", "Push your upper body upwards until you feel a stretch in your abs, then return to the starting position and repeat."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-cable-kneeling-crunch-side.mp4#t=0.1",
            exerciseName: "Cable Kneeling Crunch",
            difficulty: "Beginner",
            instructions: ["Use a double handle attachment and set the cable all the way to the top.", "Walk a few steps forward then fall into a kneeling position.", "Push your hips back and flex your abs, then push hips forward until in the starting position."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-leg-raises-side.mp4#t=0.1",
            exerciseName: "Laying Leg Raises",
            difficulty: "Beginner",
            instructions: ["Lay on your back with your arms palms down on either side.", "Keep your legs together and as straight as possible.", "Slowly raise your legs to a 90° angle, pause at this position, or as high as you can reach your legs, and then slowly lower your legs back down.", "Duration of these movements should be slow so that you do not utilize momentum, enabling you to get the most out of the exercise."]
        },
    ],
    obliques: [
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-abdominals-stretch-variation-3-front.mp4#t=0.1",
            exerciseName: "Oblique Stretch",
            difficulty: "Beginner",
            instructions: ["Stand upright.", "After completing the desired amount of reps with the left arm, switch to the right arm and lean to the left.", "Reach up with your left arm and then lean slowly to the right. Lean until a stretch is felt in the obliques."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-side-plank-up-down-front.mp4#t=0.1",
            exerciseName: "Side Plank Up Down",
            difficulty: "Intermediate",
            instructions: ["Start with your elbow and hip on the ground. Either neutral fist or flat hand on the ground.", "Begin in a side plank position, and then drop your hips to the floor.", "Pull your hips back to the ceiling to finish the rep."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-cable-woodchopper-side.mp4#t=0.1",
            exerciseName: "Cable Wood Chopper",
            difficulty: "Intermediate",
            instructions: ["Set the cable at about nipple level. Use a handle attachment.", "Face sideways, then rotate your torso with your arms extended against the resistance.", "After completing your given number of reps, face the opposite direction and repeat."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-side-bend-front.mp4#t=0.1",
            exerciseName: "Dumbbell Side Bend",
            difficulty: "Beginner",
            instructions: ["Stand with feet hip-width apart and place your right hand on the right hip.", "Hold a dumbbell with the left hand. Bend at the hips to the side.", "Make sure you don't start to lean forward to try and force a longer range of motion."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-Medicine-Ball-rainbow-slam-front.mp4#t=0.1",
            exerciseName: "Medicine Ball Rainbow Slam",
            difficulty: "Beginner",
            instructions: ["Lift medicine ball overhead.", "Slam ball down to one side.", "Catch and repeat slam to the other side."]
        },
    ],
    quads: [
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-jump-squat-front.mp4#t=0.1",
            exerciseName: "Jump Squats",
            difficulty: "Beginner",
            instructions: ["Stand with your feet shoulder-width apart.", "Start by doing a regular squat, then engage your core and jump up explosively.", "When you land, lower your body back into the squat position."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-quads-stretch-variation-3-side.mp4#t=0.1",
            exerciseName: "Quads Stretch",
            difficulty: "Beginner",
            instructions: ["Lay flat on your belly, with both hands reach back and grab the tops of your feet.", "Keeping your upper legs flat on the ground, pull both of your feet towards your buttocks.", "Keeping your upper legs flat on the ground, pull both of your feet towards your buttocks."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-highbar-squat-side.mp4#t=0.1",
            exerciseName: "Barbell Squat",
            difficulty: "Advanced",
            instructions: ["Stand with your feet shoulder-width apart. Maintain the natural arch in your back, squeezing your shoulder blades and raising your chest.", "Stand with your feet shoulder-width apart. Maintain the natural arch in your back, squeezing your shoulder blades and raising your chest.", "Bend your knees as you lower the weight without altering the form of your back until your hips are below your knees.", "Raise the bar back to starting position, lift with your legs and exhale at the top."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-sumo-deadlift-front.mp4#t=0.1",
            exerciseName: "Barbell Sumo Deadlift",
            difficulty: "Intermediate",
            instructions: ["Stance width can vary with a sumo DL. Some prefer toes near the plates. Others prefer a more narrow stance to get more drive off the floor.", "Make sure your arms are inside your legs. The bar should be just over your mid-foot. Flatten your back and push your heels into the floor.", "Try to extend your knees and hips simultaneously."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-machine-leg-extension-front.mp4#t=0.1",
            exerciseName: "Machine Leg Extension",
            difficulty: "Intermediate",
            instructions: ["Sit on the machine with your back against the cushion and adjust the machine you are using so that your knees are at a 90 degree angle at the starting position.", "Raise the weight by extending your knees outward, then lower your leg to the starting position. Both movements should be done in a slow, controlled motion."]
        },
    ],
    calves: [
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-machine-seated-calf-raise-side.mp4#t=0.1",
            exerciseName: "Machine Seated Calf Raises",
            difficulty: "Beginner",
            instructions: ["Get comfortable on the machine, then place your lower thighs beneath the padded lever. Place your toes and the balls of your feet onto the foot supports.", "Prevent the weight from slipping forward by gripping the handles, and release the safety bar. Lower the weight until your calves are extended.", "Push your heels up to lift the padded lever and hold the contracted position, then slowly lower back down to the starting position. Repeat."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-calves-stretch-variation-1-side.mp4#t=0.1",
            exerciseName: "Calves Stretch",
            difficulty: "Beginner",
            instructions: ["Place the ball of your foot against the wall with your heel on the ground. Place your hands on the wall in front of your shoulders.", "Keeping your knee straight, slowly lean towards the wall, pause for a few seconds when you feel the stretch extending through your calf muscle.", "Return to the starting position, and repeat the stretch with your other leg."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-tip-toe-walking-side.mp4#t=0.1",
            exerciseName: "Tip Toe Walking",
            difficulty: "Beginner",
            instructions: ["Point your toes into the floor.", "Slowly walk forwards and backward", "Keep your heels in the air as long as possible while walking.", "It may be beneficial to do this last at the end of your workout."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-machine-standing-calf-raises-side.mp4#t=0.1",
            exerciseName: "Machine Standing Calf Raises",
            difficulty: "Beginner",
            instructions: ["Adjust the machine in accordance with your height and place your shoulders underneath the padded lever.", "The balls of your feet should be supporting your weight on the calve block, your heels extending off of it.", "Extend your heels upwards while keeping your knees stationary, and pause at the contracted position.", "Slowly return to the starting position. Repeat."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-kettlebell-single-leg-calf-raises-side.mp4#t=0.1",
            exerciseName: "Kettlebell Single Leg Calf Raise",
            difficulty: "Beginner",
            instructions: ["Standing straight with a kettlebell in one hand, lift the same foot as the side without the kettlebell off the floor.", "Raise your heel upwards while keeping your knees stationary.", "Pause when your heels are fully extended and then slowly return to the starting position and repeat."]
        },
    ],
    triceps: [
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-cable-pushdown-side.mp4#t=0.1",
            exerciseName: "Cable Push Down",
            difficulty: "Beginner",
            instructions: ["You can use any attachment for this. The cable should be set all the way at the top of the machine.", "Make sure to keep your upper arm glued at your side. Extend your elbows until you feel your triceps contract."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-skullcrusher-side_bgn7Uzz.mp4#t=0.1",
            exerciseName: "Dumbbell Skullcrusher ",
            difficulty: "Intermediate",
            instructions: ["Lay flat on the floor or a bench with your fists extended to the ceiling and a neutral grip.", "Break at the elbows until your fists are by your temples. Then extend your elbows and flex your triceps at the top."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-tricep-dips-side.mp4#t=0.1",
            exerciseName: "Bench Dips",
            difficulty: "Beginner",
            instructions: ["Grip the edge of the bench with your hands, Keep your feet together and legs straight.", "Lower your body straight down.", "Slowly press back up to the starting point.", "TIP: Make this harder by raising your feet off the floor and adding weight."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-triceps-stretch-variation-1-front.mp4#t=0.1",
            exerciseName: "Triceps Stretch",
            difficulty: "Beginner",
            instructions: ["Raise your left arm above your head, and bend at the elbow so your hand is resting at the top of your back.", "Use the opposite hand to gently apply pressure to the elbow.", "Hold the stretch for a few seconds then repeat with the other arm."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-diamond-pushup-side.mp4#t=0.1",
            exerciseName: "Diamond Push Ups",
            difficulty: "Beginner",
            instructions: ["Position your index fingers and thumbs so they are touching, forming a diamond shape", "Use a standard push up position", "Lower your chest towards your hands, keep your elbows close to your body", "Stop just before your chest touches the floor, then push back up to the starting position."]
        },
    ],
    midBack: [
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-reverse-row-side.mp4#t=0.1",
            exerciseName: "Inverted Row",
            difficulty: "Beginner",
            instructions: ["Lay underneath a fixed horizontal bar and grab the bar with a wide overhand grip.", "Pull your body straight up to the bar.", "Return to the starting position, your arms fully extended. Repeat."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-traps-mid-back-stretch-variation-2-side.mp4#t=0.1",
            exerciseName: "Traps Mid Back Stretch",
            difficulty: "Beginner",
            instructions: ["Sit on the ground and lay one leg flat and the other over the top.", "Hold your leg with the same side arm and slowly rotate your hips and back.", "Hold at the peak of the stretch, then slowly return to starting position.", "Switch sides and repeat."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pullup-front.mp4#t=0.1",
            exerciseName: "Pull Ups",
            difficulty: "Intermediate",
            instructions: ["Grasp the bar with an overhand grip, arms and shoulders fully extended.", "Pull your body up until your chin is above the bar.", "Lower your body back to starting position."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-landmine-row-front.mp4#t=0.1",
            exerciseName: "Barbell Landmine Row",
            difficulty: "Intermediate",
            instructions: ["Position a barbell in a landmine or corner of a room and stand facing it with your feet shoulder-width apart.", "Grasp the end of the barbell with a neutral grip, keeping your arms straight and your shoulders relaxed.", "Bend at the hips and knees to lower your torso until it is almost parallel to the ground.", "Pull the barbell towards your chest, squeezing your shoulder blades together as you row the weight up."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-cable-silverback-shrug-side.mp4#t=0.1",
            exerciseName: "Cable Silverback Shrug",
            difficulty: "Beginner",
            instructions: ["Use a bar attachment. Cable should be set all the way to the bottom.", "Stand up with the attachment in hand, walk a couple of steps back make sure you are standing upright and not leaning backwards.", "Retract your shoulder blades and then protract to return to the starting position."]
        },
    ],
    glutes: [
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-hip-thrust-front.mp4#t=0.1",
            exerciseName: "Barbell Hip Thrust",
            difficulty: "Advanced",
            instructions: ["Sit on the ground with a bench behind you. Have the barbell over your legs just above your hips.", "Lean back against the bench so that your shoulders are resting upon it, stretch your arms out to either side using the bench as support.", "Raise the weight by driving through your feet and extending your hips upwards. Support the weight with your shoulders and feet.", "Slowly extend as far as you can, and then slowly return to the starting position."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-glutes-stretch-variation-3-front.mp4#t=0.1",
            exerciseName: "Glutes Stretch",
            difficulty: "Beginner",
            instructions: ["Lay flat and bring your left leg to 90 degrees.", "Hold your left leg with both hands and slowly rotate your hips to the right hand side.", "Hold at the peak of the stretch, then slowly return to starting position.", "Switch sides and repeat."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-cable-glute-kickbacks-front.mp4#t=0.1",
            exerciseName: "Cable Glute Kickback",
            difficulty: "Beginner",
            instructions: ["Use an ankle attachment. The cable should be set to the bottom of the crossover machine.", "Push your ankle straight back, extending at the hip. Hold for a one count when you feel a contraction in your glutes.", "Then flex at the hips until you are back into your original position."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-forward-lunge-side.mp4#t=0.1",
            exerciseName: "Forward Lunges",
            difficulty: "Beginner",
            instructions: ["Step forward with one leg.", "Lower your body until your rear knee nearly touches the ground.", "Ensure you remain upright, and your front knee stay above the front foot.", "Push off the floor with your front foot until you return to the starting position. Switch legs."]
        },
        {
            url: "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-bulgarian-split-squat-side.mp4#t=0.1",
            exerciseName: "Dumbbell Bulgarian Split Squat",
            difficulty: "Advanced",
            instructions: ["Find a box or bench that is roughly knee height or a few inches lower. (The lower the box is the lower the mobility requirement).", "You can either place your toes or the top of your foot on the box. Point your front foot forward or slightly turned outwards and break at the knees and hips simultaneously.", "Aim to get your front leg to hit parallel depth (hamstring parallel with the ground) or lower.", "The further forward your front foot is, the longer the Range of Motion is at your hips. The further back your front foot is, the longer the ROM at your knees."]
        },
    ],
};
