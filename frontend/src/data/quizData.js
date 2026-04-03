// 300 Questions: 3 Topics × 10 Levels × 10 Questions each
// Difficulty increases level by level within each topic

export const quizData = {
  Grammar: {
    "Level 1": [
      { text: "Which word is a noun?", options: ["Run", "Happy", "Elephant", "Quickly"], correctAnswer: 2 },
      { text: "Which sentence is correct?", options: ["She go to school.", "She goes to school.", "She going to school.", "She gone to school."], correctAnswer: 1 },
      { text: "Choose the correct article: ___ apple a day keeps the doctor away.", options: ["A", "An", "The", "No article"], correctAnswer: 1 },
      { text: "Identify the verb: 'The cat sits on the mat.'", options: ["cat", "mat", "sits", "on"], correctAnswer: 2 },
      { text: "Which is a question sentence?", options: ["Close the door.", "She is happy.", "Where are you going?", "He ran fast."], correctAnswer: 2 },
      { text: "Which word is an adjective?", options: ["Jump", "Blue", "Slowly", "Table"], correctAnswer: 1 },
      { text: "Fill in the blank: I ___ a student.", options: ["am", "is", "are", "be"], correctAnswer: 0 },
      { text: "Which punctuation ends a sentence that makes a statement?", options: ["!", "?", ".", ","], correctAnswer: 2 },
      { text: "Which word describes a doing word?", options: ["Noun", "Adjective", "Verb", "Pronoun"], correctAnswer: 2 },
      { text: "Select the correct plural: one cat, two ___.", options: ["cat", "cats", "cates", "catts"], correctAnswer: 1 }
    ],
    "Level 2": [
      { text: "Choose the correct sentence:", options: ["They is happy.", "They are happy.", "They am happy.", "They be happy."], correctAnswer: 1 },
      { text: "Which is the correct past tense of 'go'?", options: ["Goed", "Goes", "Went", "Gon"], correctAnswer: 2 },
      { text: "Fill in: She ___ her homework every day.", options: ["do", "did", "does", "doing"], correctAnswer: 2 },
      { text: "What is the opposite of 'big'?", options: ["Huge", "Small", "Tall", "Wide"], correctAnswer: 1 },
      { text: "Which sentence uses 'their' correctly?", options: ["Their going to the park.", "It is their book.", "They are over their.", "There cat is lost."], correctAnswer: 1 },
      { text: "Identify the pronoun in: 'He is my friend.'", options: ["is", "my", "friend", "He"], correctAnswer: 3 },
      { text: "Which word is an adverb?", options: ["Bright", "Quickly", "Table", "Run"], correctAnswer: 1 },
      { text: "She ___ to the store yesterday.", options: ["go", "goes", "went", "gone"], correctAnswer: 2 },
      { text: "Choose the correct sentence: 'I have ___ apple.'", options: ["a", "an", "the", "some"], correctAnswer: 1 },
      { text: "'The children play.' What is the subject?", options: ["play", "the", "children", "The children play"], correctAnswer: 2 }
    ],
    "Level 3": [
      { text: "She sings ___ than her sister.", options: ["good", "well", "better", "best"], correctAnswer: 2 },
      { text: "Which sentence is in the passive voice?", options: ["She wrote the letter.", "The letter was written by her.", "She is writing the letter.", "She has written the letter."], correctAnswer: 1 },
      { text: "Choose the correct form: 'Neither the students nor the teacher ___ ready.'", options: ["are", "is", "were", "have"], correctAnswer: 1 },
      { text: "Identify the conjunction: 'I wanted to go, but it was raining.'", options: ["wanted", "go", "but", "raining"], correctAnswer: 2 },
      { text: "Which is the correct comparative form of 'good'?", options: ["Gooder", "More good", "Better", "Best"], correctAnswer: 2 },
      { text: "Fill in: The team ___ won the match.", options: ["have", "has", "had all", "is"], correctAnswer: 1 },
      { text: "Choose the correct spelling:", options: ["Recieve", "Receive", "Receve", "Resceive"], correctAnswer: 1 },
      { text: "Identify the preposition: 'She sat under the tree.'", options: ["sat", "tree", "under", "she"], correctAnswer: 2 },
      { text: "Which word completes the sentence: '___ you finish, call me.'", options: ["Before", "After", "During", "Either After or Before"], correctAnswer: 3 },
      { text: "'He don't like it.' What is wrong?", options: ["'He' should be 'He's'", "'don't' should be 'doesn't'", "'like' should be 'likes'", "Nothing is wrong"], correctAnswer: 1 }
    ],
    "Level 4": [
      { text: "She was tired, ___ she continued working.", options: ["and", "yet", "so", "for"], correctAnswer: 1 },
      { text: "By the time he arrived, we ___ already left.", options: ["have", "had", "have had", "were"], correctAnswer: 1 },
      { text: "Choose the correct form: The data ___ been analyzed.", options: ["has", "have", "had been have", "is"], correctAnswer: 0 },
      { text: "Identify the clause type: 'Because it was raining, we stayed indoors.'", options: ["Main clause", "Noun clause", "Adverbial clause", "Relative clause"], correctAnswer: 2 },
      { text: "Which sentence uses a semicolon correctly?", options: ["I like tea; I also like coffee.", "She went; home early.", "He runs; fast.", "They; played."], correctAnswer: 0 },
      { text: "Which is an example of the present perfect tense?", options: ["I eat lunch.", "I ate lunch.", "I have eaten lunch.", "I was eating lunch."], correctAnswer: 2 },
      { text: "Choose the correctly punctuated sentence:", options: ["However, she declined the offer.", "However she declined the offer.", "However she, declined the offer.", "She however declined the offer."], correctAnswer: 0 },
      { text: "'Neither' is used with ___:", options: ["or", "nor", "and", "but"], correctAnswer: 1 },
      { text: "Identify the type: 'Completing the task required effort.'", options: ["Gerund phrase", "Infinitive phrase", "Participle phrase", "Noun clause"], correctAnswer: 0 },
      { text: "He works ___ a professional manner.", options: ["at", "with", "in", "by"], correctAnswer: 2 }
    ],
    "Level 5": [
      { text: "She would have gone ___ she had known.", options: ["if", "when", "as though", "whether"], correctAnswer: 0 },
      { text: "Identify the type of conditional: 'If it rains, I will stay home.'", options: ["Zero conditional", "First conditional", "Second conditional", "Third conditional"], correctAnswer: 1 },
      { text: "Which sentence contains a dangling modifier?", options: ["Running fast, he won the race.", "Running fast, the race was won.", "He ran fast and won.", "Fast he ran."], correctAnswer: 1 },
      { text: "Choose the word that collocates: 'take a ___'.", options: ["dinner", "decision", "walk", "Both B and C"], correctAnswer: 3 },
      { text: "Which correctly uses the subjunctive mood?", options: ["I wish she was here.", "I wish she were here.", "I wish she is here.", "I wish she been here."], correctAnswer: 1 },
      { text: "The CEO, along with his advisors, ___ attending the summit.", options: ["are", "is", "were", "have been"], correctAnswer: 1 },
      { text: "Identify the error: 'The committee have made their decisions individually.'", options: ["'committee' is wrong", "'have' should be 'has'", "'their' should be 'its'", "Both B and C"], correctAnswer: 3 },
      { text: "Choose the correct form: 'Not only did he lie, ___ he stole.'", options: ["but also", "but as well", "but even", "and also"], correctAnswer: 0 },
      { text: "What is the function of 'having completed the project' in the sentence?", options: ["Gerund", "Participial phrase", "Infinitive", "Appositive"], correctAnswer: 1 },
      { text: "Which sentence avoids a split infinitive?", options: ["To quickly run is hard.", "To run quickly is hard.", "To run is quickly hard.", "Quickly to run is hard."], correctAnswer: 1 }
    ],
    "Level 6": [
      { text: "Identify the rhetorical device: 'She sells seashells by the seashore.'", options: ["Alliteration", "Assonance", "Anaphora", "Asyndeton"], correctAnswer: 0 },
      { text: "Hardly ___ she sat down when the phone rang.", options: ["had", "has", "did", "was"], correctAnswer: 0 },
      { text: "Which sentence correctly uses an em dash?", options: ["She bought apples—and oranges.", "She—bought apples.", "She bought—apples and oranges.", "She bought apples — oranges and grapes — from the market."], correctAnswer: 3 },
      { text: "In formal writing, 'Needless to say' is considered:", options: ["Essential", "Redundant", "Formal", "Technical"], correctAnswer: 1 },
      { text: "Choose the correct form: 'The data ___ inconclusive.'", options: ["is", "are", "was being", "Both A and B depending on context"], correctAnswer: 3 },
      { text: "Which best illustrates a non-restrictive relative clause?", options: ["The boy who called is my cousin.", "The staff, who worked overtime, received bonuses.", "I need a phone that works.", "The report which I wrote is done."], correctAnswer: 1 },
      { text: "What does 'synecdoche' involve?", options: ["Part representing the whole", "Comparison without 'like' or 'as'", "Repetition", "Understatement"], correctAnswer: 0 },
      { text: "Choose the sentence with accurate parallelism:", options: ["She likes singing, to dance, and read.", "She likes singing, dancing, and reading.", "She likes to sing, dancing, and read.", "She like singing, dance, and reading."], correctAnswer: 1 },
      { text: "The word 'albeit' is used to introduce:", options: ["A reason", "A concession", "A result", "A condition"], correctAnswer: 1 },
      { text: "Identify the logical fallacy: 'All swans I've seen are white, therefore all swans are white.'", options: ["Hasty Generalization", "Post hoc", "Straw man", "Red herring"], correctAnswer: 0 }
    ],
    "Level 7": [
      { text: "Which punctuation is appropriate with a conjunctive adverb?", options: ["Comma before it", "Semicolon before and comma after", "Colon before it", "No punctuation needed"], correctAnswer: 1 },
      { text: "Identify the figure of speech: 'The pen is mightier than the sword.'", options: ["Simile", "Paradox", "Metonymy", "Synecdoche"], correctAnswer: 2 },
      { text: "Which sentence contains a misplaced modifier?", options: ["He only ate vegetables.", "Only he ate vegetables.", "He ate only vegetables.", "He ate vegetables only."], correctAnswer: 0 },
      { text: "What is a 'chiasmus'?", options: ["Repeating words at end of clauses", "Reversing structure in following clause", "Using opposite meanings", "A type of hyphen"], correctAnswer: 1 },
      { text: "Which sentence uses the Oxford comma correctly?", options: ["I bought apples oranges and grapes.", "I bought apples, oranges, and grapes.", "I bought apples, oranges and, grapes.", "I bought, apples, oranges and grapes."], correctAnswer: 1 },
      { text: "'It is I who am responsible.' This sentence is grammatically:", options: ["Incorrect — should be 'It is me'", "Correct in formal grammar", "Ambiguous", "Archaic and always wrong"], correctAnswer: 1 },
      { text: "Choose the correct sentence:", options: ["Whom should I contact?", "Who should I contact?", "Both are acceptable", "Neither is correct"], correctAnswer: 2 },
      { text: "Which is an example of litotes?", options: ["She is not unkind.", "She is wonderfully kind.", "She is the kindest person.", "She was kind once."], correctAnswer: 0 },
      { text: "Identify the absolute phrase: 'Her homework done, she went to play.'", options: ["Her homework done", "she went", "to play", "went to play"], correctAnswer: 0 },
      { text: "What does 'appositive' mean in grammar?", options: ["A verb form", "A phrase renaming a noun beside it", "A word showing contrast", "A plural form"], correctAnswer: 1 }
    ],
    "Level 8": [
      { text: "Which is the most precise word choice in academic writing?", options: ["The results were kind of interesting.", "The results were interesting.", "The results were pretty fascinating.", "The results were quite a bit noteworthy."], correctAnswer: 1 },
      { text: "Identify the zeugma in: 'She broke his car and his heart.'", options: ["It uses 'broke' to modify unlike objects", "It rhymes", "It repeats a noun", "It uses alliteration"], correctAnswer: 0 },
      { text: "Which sentence demonstrates correct concord?", options: ["Each of the engineers have submitted.", "Each of the engineers has submitted.", "Each of the engineers are submitting.", "Each engineer have submitted."], correctAnswer: 1 },
      { text: "What is an 'anacoluthon'?", options: ["A sentence that breaks off mid-thought", "A type of clause inversion", "A repeated phrase", "An overstatement"], correctAnswer: 0 },
      { text: "A 'prolepsis' in writing refers to:", options: ["Using future events in current narrative", "Repetition of words", "Exaggeration of facts", "Sudden subject change"], correctAnswer: 0 },
      { text: "'Between you and I' is grammatically incorrect because:", options: ["'between' requires plural", "'and I' should be 'and me' after a preposition", "'you' is informal", "Prepositions only take nominative case"], correctAnswer: 1 },
      { text: "Which best defines 'register' in linguistics?", options: ["Volume of speech", "Level of formality adapted to context", "Recording of language", "The pitch of voice"], correctAnswer: 1 },
      { text: "Choose the sentence with correct use of a colon:", options: ["She enjoyed: swimming, hiking, and cooking.", "She had one goal: to succeed.", "Her goal was: succeed in life.", "She: enjoyed the trip."], correctAnswer: 1 },
      { text: "What is a 'tmesis'?", options: ["Inserting a word into another word", "A type of sentence fragment", "A figure using contrast", "A word with multiple meanings"], correctAnswer: 0 },
      { text: "In which context would you use the pluperfect tense?", options: ["To describe ongoing present action", "To describe a past action before another past action", "To make a future prediction", "To express possibility"], correctAnswer: 1 }
    ],
    "Level 9": [
      { text: "Identify the error in: 'Being that he was tired, he left early.'", options: ["'Being that' is a non-standard usage", "'tired' is wrong", "'left' should be 'leaved'", "No error"], correctAnswer: 0 },
      { text: "Which phrase is an 'enallage'?", options: ["'We was robbed!'", "'The sun rose slowly.'", "'She is happy.'", "'He sings well.'"], correctAnswer: 0 },
      { text: "Choose the correctly used 'whom': ", options: ["Whom is calling?", "Whom did you invite?", "Whom will go?", "Whom arrives first?"], correctAnswer: 1 },
      { text: "What distinguishes a 'restrictive' from a 'non-restrictive' relative clause?", options: ["Restrictive clauses do not need commas; non-restrictive do", "Non-restrictive clauses are essential to meaning", "Both require commas", "Only restrictive clauses use 'that'"], correctAnswer: 0 },
      { text: "Which word correctly fits: 'The phenomenon was ___ to be understood.'", options: ["too complex", "too complexly", "very complex too", "complex to too"], correctAnswer: 0 },
      { text: "Select the sentence with correct ellipsis:", options: ["She went to school and he to work.", "She went to school and he went to work.", "Both A and B are correct", "A is informal, B is formal"], correctAnswer: 2 },
      { text: "What is 'epistrophe'?", options: ["Repetition at the beginning of clauses", "Repetition at the end of clauses", "Starting with a question", "Ending with a contradiction"], correctAnswer: 1 },
      { text: "Choose the precise academic verb: 'The study ___ that a link exists.'", options: ["shows", "demonstrates", "says", "tells"], correctAnswer: 1 },
      { text: "Which option shows correct use of 'none'?", options: ["None of them is here.", "None of them are here.", "Both are correct depending on context", "Neither is correct"], correctAnswer: 2 },
      { text: "The sentence 'To err is human' uses which infinitive structure?", options: ["Nominal infinitive", "Adverbial infinitive", "Adjectival infinitive", "Split infinitive"], correctAnswer: 0 }
    ],
    "Level 10": [
      { text: "Which correctly identifies the sentence structure of: 'Although she was tired, she completed what she had started.'", options: ["Simple", "Compound", "Complex", "Compound-complex"], correctAnswer: 2 },
      { text: "What is 'enjambment' in prose and poetry?", options: ["A sentence ending abruptly", "Running over from one line to the next without pause", "Using a long dash", "A type of irony"], correctAnswer: 1 },
      { text: "Identify the pragmatic error: A professor says 'Can you open the window?' and a student says 'Yes' and sits still.", options: ["Semantic error", "Syntactic error", "Pragmatic error — ignoring the implied request", "Phonological error"], correctAnswer: 2 },
      { text: "Which best illustrates 'antithesis'?", options: ["It was the best of times, it was the worst of times.", "To be or not to be.", "Ask not what your country can do for you.", "Both A and C"], correctAnswer: 3 },
      { text: "In systemic functional linguistics, 'ideational metafunction' refers to:", options: ["How language reflects reality", "How language manages interaction", "How language organizes text", "How language conveys feeling"], correctAnswer: 0 },
      { text: "The term 'periphrasis' means:", options: ["Using many words where few would suffice", "Reversing word order", "Omitting key words", "Using metaphors excessively"], correctAnswer: 0 },
      { text: "What is linguistic 'code-switching'?", options: ["Decoding messages", "Alternating between languages or dialects", "Using technical terms", "Changing writing style"], correctAnswer: 1 },
      { text: "Choose the precise term: A sentence that performs an action rather than describing one is called:", options: ["Declarative sentence", "Performative utterance", "Interrogative sentence", "Subordinate clause"], correctAnswer: 1 },
      { text: "Choose the most technically correct description of a 'cleft sentence':", options: ["A sentence split by a dash", "A sentence restructured to focus information using 'it is/was'", "A sentence with two main clauses", "A fragment used for emphasis"], correctAnswer: 1 },
      { text: "Which best represents 'polysyndeton'?", options: ["She ran, jumped, and fell.", "She ran and jumped and fell.", "She ran; jumped; fell.", "She ran—jumped—fell."], correctAnswer: 1 }
    ]
  },

  Vocabulary: {
    "Level 1": [
      { text: "What is a synonym for 'happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], correctAnswer: 1 },
      { text: "What is the opposite of 'hot'?", options: ["Warm", "Boiling", "Cold", "Cool"], correctAnswer: 2 },
      { text: "A person who flies a plane is called a ___.", options: ["Doctor", "Pilot", "Sailor", "Driver"], correctAnswer: 1 },
      { text: "What does 'big' mean?", options: ["Small", "Tiny", "Large", "Short"], correctAnswer: 2 },
      { text: "Which word means 'to move quickly on foot'?", options: ["Walk", "Sit", "Run", "Sleep"], correctAnswer: 2 },
      { text: "What is a synonym for 'begin'?", options: ["End", "Stop", "Finish", "Start"], correctAnswer: 3 },
      { text: "A place where people sleep and pay for a room is a ___.", options: ["Library", "Hotel", "School", "Hospital"], correctAnswer: 1 },
      { text: "What is the opposite of 'old'?", options: ["New", "Broken", "Ancient", "Wrong"], correctAnswer: 0 },
      { text: "Which word describes the weather when the sun shines?", options: ["Cloudy", "Rainy", "Sunny", "Windy"], correctAnswer: 2 },
      { text: "What does 'afraid' mean?", options: ["Happy", "Scared", "Angry", "Calm"], correctAnswer: 1 }
    ],
    "Level 2": [
      { text: "What does 'curious' mean?", options: ["Bored", "Eager to learn", "Lazy", "Confused"], correctAnswer: 1 },
      { text: "Which word is a synonym for 'brave'?", options: ["Fearful", "Courageous", "Shy", "Reckless"], correctAnswer: 1 },
      { text: "What is the meaning of 'annual'?", options: ["Daily", "Weekly", "Monthly", "Yearly"], correctAnswer: 3 },
      { text: "A 'deadline' is:", options: ["A new road", "A final date for completing something", "A type of news", "A dangerous line"], correctAnswer: 1 },
      { text: "Choose the synonym for 'difficult':", options: ["Easy", "Simple", "Challenging", "Clear"], correctAnswer: 2 },
      { text: "What does 'ancient' mean?", options: ["Very new", "Very old", "Very fast", "Very large"], correctAnswer: 1 },
      { text: "Which word means 'to fix something broken'?", options: ["Break", "Repair", "Destroy", "Replace"], correctAnswer: 1 },
      { text: "Find the antonym of 'success':", options: ["Victory", "Achievement", "Failure", "Progress"], correctAnswer: 2 },
      { text: "What is 'generosity'?", options: ["Being selfish", "Being mean", "Being willing to give freely", "Being careless"], correctAnswer: 2 },
      { text: "Which word means 'a short rest during work'?", options: ["Holiday", "Vacation", "Break", "Leave"], correctAnswer: 2 }
    ],
    "Level 3": [
      { text: "What does 'collaborate' mean?", options: ["To compete against others", "To work together", "To argue with others", "To lead a team"], correctAnswer: 1 },
      { text: "Select the synonym for 'abundant':", options: ["Scarce", "Rare", "Plentiful", "Minimal"], correctAnswer: 2 },
      { text: "What does 'postpone' mean?", options: ["Cancel permanently", "Do immediately", "Delay until later", "Confirm an event"], correctAnswer: 2 },
      { text: "Identify the phrasal verb meaning 'to cancel':", options: ["Call off", "Call up", "Call on", "Call in"], correctAnswer: 0 },
      { text: "'Ambiguous' means:", options: ["Having a clear meaning", "Open to more than one interpretation", "Completely wrong", "Overly confident"], correctAnswer: 1 },
      { text: "Which word means 'to make something worse'?", options: ["Improve", "Exacerbate", "Neutralize", "Alleviate"], correctAnswer: 1 },
      { text: "What does 'diligent' mean?", options: ["Lazy", "Careless", "Hard-working", "Distracted"], correctAnswer: 2 },
      { text: "Select the synonym of 'concise':", options: ["Wordy", "Brief and clear", "Vague", "Lengthy"], correctAnswer: 1 },
      { text: "Which word means showing strong opposition?", options: ["Supportive", "Passive", "Adamant", "Flexible"], correctAnswer: 2 },
      { text: "What is a 'mentor'?", options: ["A competitor", "An advisor who guides someone less experienced", "A supervisor", "A peer"], correctAnswer: 1 }
    ],
    "Level 4": [
      { text: "What does 'pragmatic' mean in everyday use?", options: ["Theoretical", "Dealing with practical matters", "Creative", "Idealistic"], correctAnswer: 1 },
      { text: "Select the correct meaning of 'credibility':", options: ["Fame", "Trustworthiness", "Popularity", "Strength"], correctAnswer: 1 },
      { text: "What does 'prerogative' mean?", options: ["An exclusive right", "A responsibility", "An obligation", "A punishment"], correctAnswer: 0 },
      { text: "What is a 'catalyst'?", options: ["A barrier", "Something that causes change", "A result", "A tool"], correctAnswer: 1 },
      { text: "Select the synonym for 'eloquent':", options: ["Silent", "Fluent and persuasive", "Shy", "Boring"], correctAnswer: 1 },
      { text: "What does 'consensus' mean?", options: ["Agreement among a group", "Argument", "Vote", "Decision by one person"], correctAnswer: 0 },
      { text: "Which word means 'extremely thorough'?", options: ["Partial", "Meticulous", "Casual", "Vague"], correctAnswer: 1 },
      { text: "What does 'incentive' mean?", options: ["Penalty", "Something motivating action", "A result", "A condition"], correctAnswer: 1 },
      { text: "Choose the antonym of 'transparent':", options: ["Clear", "Open", "Opaque", "Honest"], correctAnswer: 2 },
      { text: "What does 'resilient' mean?", options: ["Fragile", "Inflexible", "Able to recover quickly", "Sensitive"], correctAnswer: 2 }
    ],
    "Level 5": [
      { text: "What does 'leverage' mean in a business context?", options: ["To lose advantages", "To use something to maximum benefit", "To hire staff", "To manage budgets"], correctAnswer: 1 },
      { text: "What is 'paradigm shift'?", options: ["A minor update", "A fundamental change in approach", "A staff rotation", "A project rename"], correctAnswer: 1 },
      { text: "What does 'mitigate' mean?", options: ["To worsen", "To cause", "To lessen the impact of", "To avoid entirely"], correctAnswer: 2 },
      { text: "What is 'due diligence'?", options: ["Being overdue", "Proper research before a decision", "Post-event analysis", "A type of audit fee"], correctAnswer: 1 },
      { text: "Select the word that means 'to make something smoother':", options: ["Streamline", "Complicate", "Fragment", "Duplicate"], correctAnswer: 0 },
      { text: "What is 'synergy'?", options: ["Working alone", "The combined effect being greater than parts", "Duplicating effort", "Conflict between teams"], correctAnswer: 1 },
      { text: "'Ambivalent' means:", options: ["Strongly committed", "Having mixed feelings", "Completely opposed", "Enthusiastically for"], correctAnswer: 1 },
      { text: "Select the synonym for 'innovative':", options: ["Conventional", "Routine", "Creative and original", "Outdated"], correctAnswer: 2 },
      { text: "What does 'benchmarking' mean in business?", options: ["Setting a test", "Comparing against a standard", "A financial term", "An IT process"], correctAnswer: 1 },
      { text: "What does 'accountability' mean?", options: ["Avoiding blame", "Responsibility for one's actions", "Keeping accounts", "Monitoring others"], correctAnswer: 1 }
    ],
    "Level 6": [
      { text: "What does 'equivocate' mean?", options: ["To be clear", "To use vague language to mislead", "To agree completely", "To disagree openly"], correctAnswer: 1 },
      { text: "Which word means 'excessively talkative'?", options: ["Taciturn", "Loquacious", "Reserved", "Concise"], correctAnswer: 1 },
      { text: "Select the synonym for 'obfuscate':", options: ["Clarify", "Illuminate", "Confuse deliberately", "Simplify"], correctAnswer: 2 },
      { text: "'Sycophant' refers to:", options: ["A leader", "A flatterer who seeks favor", "A critic", "An innovator"], correctAnswer: 1 },
      { text: "What does 'perfidious' mean?", options: ["Loyal", "Deceitful and treacherous", "Brave", "Generous"], correctAnswer: 1 },
      { text: "Select the antonym of 'verbose':", options: ["Wordy", "Detailed", "Laconic", "Elaborate"], correctAnswer: 2 },
      { text: "What does 'perspicacious' mean?", options: ["Confused", "Good at noticing things", "Forgetful", "Overly sensitive"], correctAnswer: 1 },
      { text: "'Propitious' most nearly means:", options: ["Unfortunate", "Favorable", "Dangerous", "Delayed"], correctAnswer: 1 },
      { text: "Select the word meaning 'indirectly expressed':", options: ["Blunt", "Explicit", "Implicit", "Stated"], correctAnswer: 2 },
      { text: "What is 'umbrage'?", options: ["Shade", "Offense or annoyance taken", "A delay", "An agreement"], correctAnswer: 1 }
    ],
    "Level 7": [
      { text: "Which word means 'stubbornly refusing to change'?", options: ["Flexible", "Obdurate", "Adaptable", "Compliant"], correctAnswer: 1 },
      { text: "What does 'recondite' mean?", options: ["Common", "Little known or obscure", "Widely understood", "Simplified"], correctAnswer: 1 },
      { text: "'Inveterate' means:", options: ["Easily changed", "Deep-rooted through long habit", "New to a habit", "Occasional"], correctAnswer: 1 },
      { text: "Select the correct meaning of 'anathema':", options: ["A blessing", "Something detested or greatly disliked", "A celebration", "A religious ceremony"], correctAnswer: 1 },
      { text: "What does 'pellucid' mean?", options: ["Dark and murky", "Translucently clear", "Dense", "Distorted"], correctAnswer: 1 },
      { text: "Which word means 'unfriendly and unsociable'?", options: ["Affable", "Gregarious", "Misanthropic", "Cordial"], correctAnswer: 2 },
      { text: "What does 'tendentious' mean?", options: ["Objective", "Promoting a particular cause", "Random", "Calm"], correctAnswer: 1 },
      { text: "'Ephemeral' means:", options: ["Lasting forever", "Very short-lived", "Historical", "Strong"], correctAnswer: 1 },
      { text: "Select the synonym for 'dogmatic':", options: ["Open-minded", "Skeptical", "Asserting opinions as facts", "Flexible"], correctAnswer: 2 },
      { text: "What does 'supercilious' mean?", options: ["Humble", "Behaving as if superior", "Generous", "Thoughtful"], correctAnswer: 1 }
    ],
    "Level 8": [
      { text: "What does 'sophistry' mean?", options: ["Wisdom", "Clever but misleading argument", "Simple reasoning", "Factual truth"], correctAnswer: 1 },
      { text: "Which word means 'characterized by excessive talk'?", options: ["Laconic", "Verbose", "Terse", "Crisp"], correctAnswer: 1 },
      { text: "'Solipsistic' means focused on:", options: ["Others exclusively", "Oneself to the exclusion of others", "Society's needs", "Abstract logic"], correctAnswer: 1 },
      { text: "What does 'pugnacious' mean?", options: ["Peaceful", "Inclined to fight or argue", "Cowardly", "Friendly"], correctAnswer: 1 },
      { text: "Select the meaning of 'garrulous':", options: ["Silent", "Excessively talkative", "Thoughtful", "Witty"], correctAnswer: 1 },
      { text: "Which word describes praise that is excessive and undeserved?", options: ["Biting critique", "Encomium", "Faint praise", "Sycophancy"], correctAnswer: 3 },
      { text: "What does 'tendentious' describe?", options: ["Factual reporting", "Biased to promote a cause", "Scientific analysis", "Neutral observation"], correctAnswer: 1 },
      { text: "'Malapropism' involves:", options: ["Correct word use", "Using an incorrect word that sounds similar", "Overstatement", "Understatement"], correctAnswer: 1 },
      { text: "What does 'inimical' mean?", options: ["Friendly", "Harmful or hostile", "Supportive", "Neutral"], correctAnswer: 1 },
      { text: "Select the word meaning 'extremely strict in moral matters':", options: ["Lenient", "Puritanical", "Liberal", "Tolerant"], correctAnswer: 1 }
    ],
    "Level 9": [
      { text: "What does 'execrate' mean?", options: ["Praise highly", "Hate intensely", "Simplify", "Study carefully"], correctAnswer: 1 },
      { text: "Which word means 'of fundamental importance'?", options: ["Trivial", "Peripheral", "Quintessential", "Optional"], correctAnswer: 2 },
      { text: "'Turpitude' refers to:", options: ["Excellence of character", "Wickedness or depravity", "Social status", "Physical strength"], correctAnswer: 1 },
      { text: "What does 'sophrosyne' mean?", options: ["Impulsiveness", "Self-control and moderation", "Arrogance", "Ignorance"], correctAnswer: 1 },
      { text: "Select the correct meaning of 'mendacious':", options: ["Truthful", "Given to lying", "Trustworthy", "Innocent"], correctAnswer: 1 },
      { text: "What does 'persiflage' mean?", options: ["Serious debate", "Light, teasing talk", "Formal speech", "Written argument"], correctAnswer: 1 },
      { text: "'Lachrymose' describes someone who:", options: ["Laughs easily", "Cries frequently", "Speaks rarely", "Angers easily"], correctAnswer: 1 },
      { text: "What does 'captious' mean?", options: ["Generous", "Prone to finding fault", "Creative", "Naive"], correctAnswer: 1 },
      { text: "Which word means 'showing sophisticated charm'?", options: ["Gauche", "Debonair", "Uncouth", "Clumsy"], correctAnswer: 1 },
      { text: "What does 'dilettante' refer to?", options: ["An expert", "A person with casual interest in an art", "A professional artist", "A critic"], correctAnswer: 1 }
    ],
    "Level 10": [
      { text: "What does 'vellichor' evoke?", options: ["Happiness in crowds", "Strange wistfulness of used bookshops", "Fear of strangers", "Love of music"], correctAnswer: 1 },
      { text: "Which term describes language that sounds magnificent but lacks substance?", options: ["Concise prose", "Bombast", "Understatement", "Plain speech"], correctAnswer: 1 },
      { text: "What is 'apophenia'?", options: ["Phobia of darkness", "Seeing patterns in unrelated things", "Loss of memory", "Inability to focus"], correctAnswer: 1 },
      { text: "Which word means 'the study of words and their history'?", options: ["Phonology", "Etymology", "Syntax", "Semantics"], correctAnswer: 1 },
      { text: "'Kakorrhaphiophobia' refers to fear of:", options: ["Failure", "Success", "Spiders", "Public speaking"], correctAnswer: 0 },
      { text: "What does 'enantiodromia' mean in psychology?", options: ["Excessive praise", "The tendency of extremes to flip to their opposite", "Fear of self", "Empathy fatigue"], correctAnswer: 1 },
      { text: "Select the word for 'a word meaning the opposite of another':", options: ["Homonym", "Antonym", "Synonym", "Paronym"], correctAnswer: 1 },
      { text: "What does 'aptronym' mean?", options: ["A word borrowed from another language", "A name suitable to its owner's profession", "A root word", "A made-up word"], correctAnswer: 1 },
      { text: "Which word describes the attitude of accepting whatever comes?", options: ["Stoicism", "Nihilism", "Hedonism", "Cynicism"], correctAnswer: 0 },
      { text: "What does 'liminal' mean?", options: ["Final", "Occupying a threshold between states", "Permanent", "Rigid"], correctAnswer: 1 }
    ]
  },

  Scenario: {
    "Level 1": [
      { text: "How do you greet someone in the morning?", options: ["Ignore them", "Good morning!", "Go away!", "Shout loudly"], correctAnswer: 1 },
      { text: "You spill water on a classmate's notebook. What do you do?", options: ["Run away", "Apologize and help dry it", "Laugh", "Blame the table"], correctAnswer: 1 },
      { text: "Someone holds the door open for you. You say:", options: ["Nothing", "Go away", "Thank you!", "I can do it myself"], correctAnswer: 2 },
      { text: "Your teacher asks a question. You should:", options: ["Stay silent", "Raise your hand to answer", "Shout the answer", "Distract others"], correctAnswer: 1 },
      { text: "A new student joins your class. You:", options: ["Ignore them", "Smile and introduce yourself", "Laugh at them", "Walk away"], correctAnswer: 1 },
      { text: "You need help with homework. You:", options: ["Give up", "Ask a teacher or classmate politely", "Copy someone's work", "Leave it blank"], correctAnswer: 1 },
      { text: "You are hungry at a restaurant. What do you do?", options: ["Grab food from another table", "Politely ask a waiter", "Shout for food", "Walk into the kitchen"], correctAnswer: 1 },
      { text: "You accidentally bump into someone. You say:", options: ["Nothing", "'Move!'", "'It's your fault!'", "'I'm sorry!'"], correctAnswer: 3 },
      { text: "A friend is crying. You should:", options: ["Laugh at them", "Walk away", "Ask what's wrong and comfort them", "Tell others about it"], correctAnswer: 2 },
      { text: "You arrive late to class. You should:", options: ["Tiptoe in quietly and apologize to the teacher after", "Slam the door", "Refuse to go in", "Make an excuse loudly"], correctAnswer: 0 }
    ],
    "Level 2": [
      { text: "How should you politely disagree with a friend?", options: ["Say you're wrong, end of story.", "I see your point, but I think...", "That's a bad idea!", "Whatever."], correctAnswer: 1 },
      { text: "You receive a gift you don't like. You:", options: ["Throw it away in front of them", "Say 'This is terrible'", "Thank them sincerely", "Ask for a receipt"], correctAnswer: 2 },
      { text: "You need to borrow someone's phone. You ask:", options: ["'Give me your phone.'", "'Could I borrow your phone briefly, please?'", "'Phone me now.'", "'Your phone—now!'"], correctAnswer: 1 },
      { text: "A coworker makes a mistake. You:", options: ["Announce it to everyone", "Laugh at them", "Quietly tell them privately", "Ignore it"], correctAnswer: 2 },
      { text: "Someone gives you critical feedback. You:", options: ["Get angry", "Walk away", "Thank them and consider their input", "Argue back"], correctAnswer: 2 },
      { text: "You need to interrupt a conversation. You say:", options: ["'Hey!' and speak over them", "'Excuse me, may I add something?'", "'Stop talking!'", "'My turn now!'"], correctAnswer: 1 },
      { text: "A friend is stressed about exams. You:", options: ["Tell them to relax and stop worrying", "Listen and offer to help or study together", "Boast about your own results", "Avoid the topic"], correctAnswer: 1 },
      { text: "You must cancel plans last minute. You should:", options: ["Just not show up", "Send a message and apologize", "Blame traffic afterward", "Call 3 hours late"], correctAnswer: 1 },
      { text: "Someone cuts in front of you in a line. You:", options: ["Push them back", "Politely point out the queue", "Shout and cause a scene", "Say nothing and allow it"], correctAnswer: 1 },
      { text: "You are complimented at work. You say:", options: ["'I know, I'm the best.'", "'Thank you so much, I really appreciated this opportunity.'", "'It was nothing.'", "'You're just saying that.'"], correctAnswer: 1 }
    ],
    "Level 3": [
      { text: "During a team meeting, you disagree with the manager's decision. You:", options: ["Argue openly and immediately", "Bring it up privately with data after the meeting", "Silently comply even if it harms the project", "Complain to colleagues"], correctAnswer: 1 },
      { text: "A team member is underperforming. As a peer, you:", options: ["Report them immediately", "Do their tasks without saying anything", "Have a private, supportive conversation", "Ignore it", ], correctAnswer: 2 },
      { text: "You are running late for an important meeting. You:", options: ["Walk in and ignore the disruption", "Send a message in advance and apologize", "Skip the meeting", "Blame traffic loudly when you arrive"], correctAnswer: 1 },
      { text: "You find an error in your manager's presentation. You:", options: ["Correct them publicly in front of all", "Tell them privately before it goes live", "Say nothing and let it fail", "Post about it online"], correctAnswer: 1 },
      { text: "A customer complains about your service. You:", options: ["Argue back", "Apologize and offer a solution", "Transfer them without warning", "Say 'That's not my problem'"], correctAnswer: 1 },
      { text: "How do you handle a conflict with a colleague?", options: ["Avoid all contact", "Discuss the issue directly and respectfully", "Involve HR immediately", "Post a passive-aggressive note"], correctAnswer: 1 },
      { text: "Your project deadline is at risk. You should:", options: ["Hide it until the deadline", "Inform stakeholders early and propose solutions", "Work overtime silently", "Blame others"], correctAnswer: 1 },
      { text: "A new policy at work affects your team negatively. You:", options: ["Ignore it", "Complain to everyone", "Raise your concerns through the right channels", "Break the policy quietly"], correctAnswer: 2 },
      { text: "You're asked to take on more work than you can handle. You:", options: ["Accept everything to seem capable", "Decline rudely", "Discuss priorities and set realistic expectations", "Say nothing and underperform"], correctAnswer: 2 },
      { text: "After completing a project, you should:", options: ["Immediately start the next one", "Conduct a brief retrospective to identify improvements", "Celebrate and forget the challenges", "Move on with no reflection"], correctAnswer: 1 }
    ],
    "Level 4": [
      { text: "You are facilitating a meeting that is going off topic. You:", options: ["Let people talk freely", "Politely redirect to the agenda", "Shout for order", "Leave the meeting"], correctAnswer: 1 },
      { text: "To build trust with your team, you should:", options: ["Always appear confident, never admit weakness", "Consistently follow through on commitments", "Share gossip to bond with them", "Delegate everything"], correctAnswer: 1 },
      { text: "A key client is unhappy with results. You:", options: ["Over-promise on the next batch", "Acknowledge their concerns and negotiate a realistic plan", "Avoid the client", "Tell them they are wrong"], correctAnswer: 1 },
      { text: "You receive positive news in a negotiation. The best response is:", options: ["Immediately celebrate out loud", "Remain composed and continue the discussion professionally", "Demand more immediately", "Tell everyone in the room"], correctAnswer: 1 },
      { text: "How should you follow up after a business meeting?", options: ["Send a detailed thank-you email summarizing decisions", "Only follow up if asked", "Send a lengthy report the next day", "Just remember it mentally"], correctAnswer: 0 },
      { text: "A colleague takes credit for your idea. You:", options: ["Start a fight", "Mention your role calmly but firmly in future discussions", "Say nothing ever", "Undermine their work"], correctAnswer: 1 },
      { text: "You must deliver bad news to a client. You:", options: ["Email it at the end of the day Friday", "Avoid the conversation", "Call directly and be honest and prepared with solutions", "Have a junior staff member do it"], correctAnswer: 2 },
      { text: "In a cross-cultural meeting, you should:", options: ["Assume everyone shares your communication style", "Adapt and be mindful of other cultures' norms", "Speak only your language", "Use humor to relax everyone"], correctAnswer: 1 },
      { text: "You are presenting data that contradicts your manager's hypothesis. You:", options: ["Change the data", "Avoid presenting it", "Present it honestly and professionally", "Blame the data source"], correctAnswer: 2 },
      { text: "A team member comes to you overwhelmed. You:", options: ["Tell them to manage their time better", "Listen, empathize, and help prioritize tasks together", "Refer them straight to HR", "Ignore it"], correctAnswer: 1 }
    ],
    "Level 5": [
      { text: "During salary negotiation, the employer offers below your expectation. You:", options: ["Immediately accept to seem grateful", "Decline and leave", "Counter-offer with a reasoned, confident response", "Complain to the HR team"], correctAnswer: 2 },
      { text: "You are asked for your professional opinion, but it contradicts your CEO. You:", options: ["Agree with the CEO regardless", "Respectfully share your analysis and evidence", "Stay silent", "Leak your opinion to others"], correctAnswer: 1 },
      { text: "A strategic decision requires collaboration across departments. You:", options: ["Work in your silo", "Set up a cross-functional meeting to align", "Implement your plan without consulting others", "Wait to be told what to do"], correctAnswer: 1 },
      { text: "You lead a project that fails. As a leader, you:", options: ["Blame team members", "Deflect to external circumstances only", "Take ownership and lead a debrief for learning", "Quit the role"], correctAnswer: 2 },
      { text: "An ethical concern arises at work. You:", options: ["Ignore if it's not your department", "Raise it through proper channels promptly", "Wait to see if others notice", "Only act if you profit from it"], correctAnswer: 1 },
      { text: "A high-value stakeholder gives irrelevant input during planning. You:", options: ["Ignore them", "Implement all their feedback to please them", "Thank them and filter input based on merit", "Openly dismiss their input"], correctAnswer: 2 },
      { text: "Two teams under you are in conflict. You:", options: ["Take one side", "Let them resolve it themselves", "Facilitate a structured dialogue to find common ground", "Replace both teams"], correctAnswer: 2 },
      { text: "A project is behind schedule. How do you communicate this to the client?", options: ["Hide it", "Proactively communicate with a recovery plan", "Blame the team in your email", "Ask the team to fix it first without saying anything"], correctAnswer: 1 },
      { text: "You want to inspire your team during a crisis. You:", options: ["Demand results with threats", "Communicate a clear vision and show empathy", "Pretend nothing is wrong", "Set impossible targets to motivate fear"], correctAnswer: 1 },
      { text: "When building your professional network, you prioritize:", options: ["Collecting business cards", "Building genuine, mutually beneficial relationships", "Adding everyone on LinkedIn", "Only networking with powerful people"], correctAnswer: 1 }
    ],
    "Level 6": [
      { text: "A board member asks a question outside your expertise in a presentation. You:", options: ["Guess confidently", "Say 'I don't know' and leave it there", "Acknowledge the gap and commit to following up with data", "Redirect the question to someone else without explanation"], correctAnswer: 2 },
      { text: "Cultural sensitivity in global communication means:", options: ["Communicating the same way everywhere", "Modifying your approach to respect cultural norms", "Avoiding cultures you don't understand", "Using a translator for everything"], correctAnswer: 1 },
      { text: "You must give feedback to a high-performer who made a rare mistake. You:", options: ["Ignore it since they usually perform well", "Make a public example", "Privately give specific, constructive feedback", "Over-praise to soften it"], correctAnswer: 2 },
      { text: "The best way to resolve a negotiation impasse is to:", options: ["Demand your position is met", "Give in to avoid conflict", "Explore interests behind positions for creative solutions", "Escalate immediately to management"], correctAnswer: 2 },
      { text: "An urgent email from a C-suite executive arrives with an unclear request. You:", options: ["Respond immediately with a guess", "Ignore until you understand it", "Request clarification professionally and promptly", "Forward to your manager"], correctAnswer: 2 },
      { text: "In a crisis communication scenario, your first priority is:", options: ["Protecting the brand image", "Assigning blame", "Ensuring accurate information reaches stakeholders quickly", "Controlling media access"], correctAnswer: 2 },
      { text: "A colleague interrupts you repeatedly in meetings. You:", options: ["Interrupt them back equally", "Complain to HR immediately", "Calmly address it privately and directly", "Stop contributing in meetings"], correctAnswer: 2 },
      { text: "When leading change in an organization, resistance is best handled by:", options: ["Forcing compliance", "Involving resistors early and addressing their concerns", "Ignoring it", "Punishing non-compliance"], correctAnswer: 1 },
      { text: "Your presentation finishes early. You should:", options: ["Sit awkwardly until time ends", "Open for questions and guide a relevant discussion", "Apologize for ending early", "Leave the room"], correctAnswer: 1 },
      { text: "Effective delegation means:", options: ["Assigning tasks randomly", "Doing everything yourself to be safe", "Matching tasks to skills and trusting the team to execute", "Delegating only unimportant tasks"], correctAnswer: 2 }
    ],
    "Level 7": [
      { text: "You discover a critical product flaw after launch. As a communications lead, you:", options: ["Wait for media to find out", "Issue a proactive statement with facts and remediation", "Deny the flaw", "Only communicate internally"], correctAnswer: 1 },
      { text: "Stakeholder mapping helps you:", options: ["Create org charts", "Identify and prioritize who to communicate with and how", "Schedule meetings", "Assign blame"], correctAnswer: 1 },
      { text: "A team member violates a key policy. As their leader, you:", options: ["Publicly shame them", "Ignore it to preserve the relationship", "Address it promptly and follow due process", "Let HR handle it without your input"], correctAnswer: 2 },
      { text: "When presenting to a skeptical audience, you should:", options: ["Avoid difficult questions", "Preemptively address objections with data", "Speak louder to convey confidence", "Stick to your script rigidly"], correctAnswer: 1 },
      { text: "Managing upward means:", options: ["Reporting everything to management", "Proactively managing the expectations and needs of your superiors", "Flattering executives", "Avoiding decisions that involve leadership"], correctAnswer: 1 },
      { text: "The best way to communicate a complex data finding to a non-technical audience is:", options: ["Provide raw datasets", "Use visual metaphors and plain language", "Use highly technical terms to appear credible", "Summarize in one sentence and no more"], correctAnswer: 1 },
      { text: "You're mediating between two departments in conflict. Your first step is:", options: ["Decide who is right", "Have both parties present simultaneously and argue", "Meet with each side separately to understand their perspective", "Escalate to the CEO"], correctAnswer: 2 },
      { text: "Your company's messaging contradicts its actions. This creates:", options: ["Shareholder value", "A credibility gap", "Brand loyalty", "Positive PR"], correctAnswer: 1 },
      { text: "The 'Communication Ladder' concept suggests:", options: ["Messages must always be escalated higher", "Clarity improves as seniority increases", "Simpler messages go wrong when passed through multiple layers", "All messages need email confirmation"], correctAnswer: 2 },
      { text: "When drafting a crisis statement, you should always:", options: ["Blame external factors first", "Lead with empathy and facts before corporate messaging", "Minimize the issue's severity", "Avoid specific timelines"], correctAnswer: 1 }
    ],
    "Level 8": [
      { text: "You are asked to lead a hostile audience after a brand scandal. You:", options: ["Cancel the event", "Defend aggressively", "Acknowledge, take responsibility, and share a recovery plan", "Send a junior spokesperson"], correctAnswer: 2 },
      { text: "What is 'active listening' in a professional context?", options: ["Taking notes while someone speaks", "Fully focusing, understanding, and responding thoughtfully", "Simply staying quiet", "Rephrasing everything they say"], correctAnswer: 1 },
      { text: "An executive asks for feedback on their leadership. The most valuable response is:", options: ["Praise them broadly with no specifics", "Provide specific behavioral examples with impact", "Say everything is fine", "Decline politely"], correctAnswer: 1 },
      { text: "When building psychological safety in a team, you:", options: ["Allow only senior members to voice concerns", "Reward risk-taking and treat mistakes as learning", "Only praise top performers", "Maintain strict hierarchy in communication"], correctAnswer: 1 },
      { text: "You need to deliver a 'no' to a senior partner's request. You:", options: ["Say yes and under-deliver", "Say no without explanation", "Explain your constraints and propose alternatives", "Send an email and avoid follow-up"], correctAnswer: 2 },
      { text: "The most effective negotiators focus on:", options: ["Positions (what they want)", "Interests (why they want it)", "Winning the argument", "Speed of agreement"], correctAnswer: 1 },
      { text: "Your organization is facing PR scrutiny. Your communication team should:", options: ["Stay silent", "Issue reactive statements only", "Develop proactive stakeholder communication with a clear narrative", "Focus entirely on internal morale"], correctAnswer: 2 },
      { text: "Emotional intelligence in leadership communication includes:", options: ["Suppressing emotion entirely", "Recognizing and managing emotions in self and others", "Showing vulnerability in every meeting", "Relying on data only"], correctAnswer: 1 },
      { text: "When a client asks about a competitor's weaknesses, you:", options: ["Criticize the competitor directly", "Claim you don't know", "Redirect focus to your own unique value proposition", "Agree the competitor is worse"], correctAnswer: 2 },
      { text: "Which principle should guide all organizational communication?", options: ["Speed first", "Consistency, clarity, and credibility", "Volume of output", "Department loyalty"], correctAnswer: 1 }
    ],
    "Level 9": [
      { text: "You are pitching to venture capitalists and one is hostile. You:", options: ["Become defensive", "Stay calm, address their concern with evidence, and move forward", "Ignore their input", "End the pitch early"], correctAnswer: 1 },
      { text: "A whistleblower in your team reports a concern. As a leader, you:", options: ["Silence them", "Retaliate subtly", "Protect them and investigate through proper governance", "Announce it in a team meeting"], correctAnswer: 2 },
      { text: "Systems thinking in communication means:", options: ["Using technology in messaging", "Understanding how communication decisions affect entire ecosystems", "Organizing systems of documents", "Automating responses"], correctAnswer: 1 },
      { text: "'Political capital' in an organization refers to:", options: ["Financial budget", "The goodwill and influence you've built over time", "Government contracts", "Office politics gossip"], correctAnswer: 1 },
      { text: "When an organization's strategy changes, communication should:", options: ["Come after implementation begins", "Be top-down and non-collaborative", "Precede and accompany implementation with ongoing engagement", "Be optional for most staff"], correctAnswer: 2 },
      { text: "A news journalist contacts you for an unexpected comment on a controversy. You:", options: ["Respond immediately with your opinion", "'No comment' and hang up", "Acknowledge receipt and commit to a formal statement after consulting stakeholders", "Deny the issue exists"], correctAnswer: 2 },
      { text: "What is 'impression management' in professional communication?", options: ["Faking your personality", "Deliberately shaping how others perceive you", "Managing social media images", "Being constantly positive"], correctAnswer: 1 },
      { text: "Intercultural competence in business communication requires:", options: ["Speaking multiple languages", "Awareness, attitude, and adaptive behavior across cultures", "Avoiding cultural topics", "Using universal symbols"], correctAnswer: 1 },
      { text: "An ethical communicator does which of the following?", options: ["Selectively shares information to benefit themselves", "Ensures messages are accurate, honest, and fair", "Avoids sensitive topics entirely", "Only communicates through intermediaries"], correctAnswer: 1 },
      { text: "The term 'narrative framing' means:", options: ["Writing narrative essays", "Presenting facts within a context that shapes interpretation", "Avoiding context entirely", "Reducing information to bullet points"], correctAnswer: 1 }
    ],
    "Level 10": [
      { text: "In a complex multi-stakeholder crisis, communicators must balance:", options: ["Transparency vs. litigation risk, speed vs. accuracy, and empathy vs. strategy", "Social media vs. print media", "Internal vs. external budgets", "Brand vs. product messaging"], correctAnswer: 0 },
      { text: "An organization's communications culture is best assessed by:", options: ["Reading the official policy", "Observing what behaviors are actually rewarded and tolerated", "Survey results alone", "Number of company-wide emails"], correctAnswer: 1 },
      { text: "What does 'dialogic communication' prioritize?", options: ["One-way information delivery", "Mutual, reciprocal exchange of meaning", "Mass broadcasting", "Silent reflection"], correctAnswer: 1 },
      { text: "The 'rhetoric triangle' (Ethos, Pathos, Logos) refers to:", options: ["Writing format, grammar, and vocabulary", "Credibility, emotion, and logic in persuasion", "Three types of audience", "Types of public speaking venues"], correctAnswer: 1 },
      { text: "Organizational 'silo mentality' in communication leads to:", options: ["Greater efficiency", "Lack of information sharing across departments", "Improved collaboration", "Clearer roles"], correctAnswer: 1 },
      { text: "When communicating organizational values authentically, leaders must:", options: ["Reference them only in annual reports", "Embody them consistently in daily behavior and decisions", "Post them on walls", "Mention them in onboarding only"], correctAnswer: 1 },
      { text: "What is 'dark PR' or 'astroturfing'?", options: ["Night-mode social media scheduling", "Creating fake grassroots support to manipulate public opinion", "Anonymous internal feedback", "Offline PR campaigns"], correctAnswer: 1 },
      { text: "In high-pressure negotiations, the best BATNA strategy involves:", options: ["Accepting the first offer", "Knowing your best alternative and using it as leverage without bluffing", "Hiding your alternatives", "Making your alternative sound better than it is"], correctAnswer: 1 },
      { text: "Communication in VUCA (Volatile, Uncertain, Complex, Ambiguous) environments requires:", options: ["Rigid scripted messaging", "Adaptive, transparent, and frequent communication", "Silence until certainty", "Only formal channels"], correctAnswer: 1 },
      { text: "Select the most sophisticated professional communication principle:", options: ["Always have the last word", "Tailor every message to the audience's context, culture, and cognitive state", "Use complex vocabulary to appear authoritative", "Communicate only in writing"], correctAnswer: 1 }
    ]
  }
};
