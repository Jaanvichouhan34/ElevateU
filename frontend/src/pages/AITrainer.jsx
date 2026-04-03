import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare, Send, Bot, Zap, Brain, Sparkles, Target, Award,
  RefreshCw, ChevronRight, CheckCircle, TrendingUp, Trophy, Lock,
  Unlock, Star, ChevronLeft, XCircle
} from 'lucide-react';
import { quizData } from '../data/quizData';

const PASSING_SCORE = 8; // out of 10 = 80%
const TOTAL_LEVELS = 10;
const STORAGE_KEY = 'elevateU_quiz_progress';

const getProgress = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return { Grammar: 1, Vocabulary: 1, Scenario: 1 };
};

const saveProgress = (progress) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

const levelLabels = {
  1: 'Starter', 2: 'Foundation', 3: 'Elementary', 4: 'Pre-Intermediate',
  5: 'Intermediate', 6: 'Upper-Intermediate', 7: 'Advanced', 8: 'Expert',
  9: 'Master', 10: 'Elite'
};

const levelColors = {
  1: 'from-slate-400 to-slate-500',
  2: 'from-green-400 to-green-600',
  3: 'from-teal-400 to-teal-600',
  4: 'from-cyan-400 to-cyan-600',
  5: 'from-blue-400 to-blue-600',
  6: 'from-indigo-400 to-indigo-600',
  7: 'from-violet-400 to-violet-600',
  8: 'from-purple-400 to-purple-600',
  9: 'from-pink-400 to-pink-600',
  10: 'from-yellow-400 to-amber-500',
};

const AITrainer = () => {
  const [activeTab, setActiveTab] = useState('quiz');
  const [quizState, setQuizState] = useState('config'); // config, active, result
  const [topic, setTopic] = useState('Grammar');
  const [level, setLevel] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [progress, setProgress] = useState(getProgress());
  const [levelUnlocked, setLevelUnlocked] = useState(false);

  // Chat state
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I'm your AI Communication Coach. Choose a mode or just start typing to practice your conversation skills." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const startQuiz = () => {
    const levelKey = `Level ${level}`;
    const bank = quizData[topic][levelKey];
    const shuffled = [...bank].sort(() => 0.5 - Math.random());
    setQuestions(shuffled);
    setQuizState('active');
    setCurrentQuestion(0);
    setScore(0);
    setUserAnswers([]);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setLevelUnlocked(false);
  };

  const handleAnswer = (optionIndex) => {
    if (showFeedback) return;
    const isCorrect = optionIndex === questions[currentQuestion].correctAnswer;
    setSelectedAnswer(optionIndex);
    setShowFeedback(true);

    const newScore = isCorrect ? score + 1 : score;
    if (isCorrect) setScore(newScore);

    const newAnswers = [...userAnswers, {
      question: questions[currentQuestion].text,
      answer: questions[currentQuestion].options[optionIndex],
      correct: isCorrect,
      correctAnswer: questions[currentQuestion].options[questions[currentQuestion].correctAnswer]
    }];
    setUserAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        // Quiz complete — check if passed
        if (newScore >= PASSING_SCORE && level < TOTAL_LEVELS) {
          const newProgress = { ...progress, [topic]: Math.max(progress[topic], level + 1) };
          setProgress(newProgress);
          saveProgress(newProgress);
          setLevelUnlocked(true);
        }
        setScore(newScore);
        setQuizState('result');
      }
    }, 1200);
  };

  const handleSendMessage = async (e) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const assistantResponse = getAssistantResponse(input, topic);

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: assistantResponse }]);
      setIsTyping(false);
    }, 1200);
  };

  const getAssistantResponse = (userInput, context) => {
    const lowInput = userInput.toLowerCase();
    if (lowInput.includes('hello') || lowInput.includes('hi')) return `Hi there! I'm ready to help you with ${context}. What's on your mind today?`;
    if (lowInput.includes('interview')) return "Interviews can be tough! My best advice is to use the STAR method: Situation, Task, Action, Result. Would you like to do a mock interview?";
    if (lowInput.includes('confidence')) return "Confidence comes from preparation. Let's practice some common scenarios to help you feel more at ease.";
    if (lowInput.includes('grammar')) return "Grammar is the foundation of clear communication. I can help you spot common errors in your sentences.";
    if (lowInput.includes('level')) return `You're currently on Level ${level} of ${topic}. Keep practicing and unlock all 10 levels!`;
    return `That's an interesting point about ${context}. Can you elaborate more on that? I'm here to refine your professional presence.`;
  };

  const passedCurrentLevel = score >= PASSING_SCORE;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-600/10 text-indigo-600 text-xs font-black uppercase tracking-widest">
            <Sparkles size={14} /> <span>Smart Training</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter italic">AI <span className="text-indigo-600 dark:text-cyan-400">Trainer</span></h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium max-w-md">Master communication with 10 progressive levels of expert-crafted questions.</p>
        </motion.div>

        <div className="flex p-2 glass rounded-[2.5rem] shadow-2xl border-indigo-500/10">
          <button onClick={() => setActiveTab('quiz')} className={`px-10 py-4 rounded-[2rem] text-sm font-black transition-all ${activeTab === 'quiz' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-indigo-600'}`}>
            Knowledge Quiz
          </button>
          <button onClick={() => setActiveTab('chat')} className={`px-10 py-4 rounded-[2rem] text-sm font-black transition-all ${activeTab === 'chat' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-indigo-600'}`}>
            Practice Coach
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'quiz' ? (
          <motion.div
            key="quiz-tab"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass rounded-[3.5rem] p-8 md:p-20 border-indigo-500/5 shadow-2xl shadow-indigo-500/5 overflow-hidden relative"
          >
            {/* CONFIG SCREEN */}
            {quizState === 'config' && (
              <div className="max-w-4xl mx-auto space-y-14 py-6">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-indigo-600/10 rounded-[2.5rem] flex items-center justify-center text-indigo-600 mx-auto mb-8 shadow-inner">
                    <Brain size={48} />
                  </div>
                  <h2 className="text-4xl font-black tracking-tight">Configure Your Session</h2>
                  <p className="text-slate-500 font-medium">Select a topic and unlock levels by scoring 80%+.</p>
                </div>

                {/* Topic Selection */}
                <div className="space-y-6">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center">
                    <Target size={14} className="mr-2 text-indigo-500" /> Topic
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Grammar', 'Vocabulary', 'Scenario'].map(t => (
                      <button
                        key={t}
                        onClick={() => { setTopic(t); setLevel(1); }}
                        className={`p-6 rounded-3xl text-left font-black transition-all flex items-center justify-between border-2 ${topic === t ? 'bg-indigo-600 text-white border-indigo-600 shadow-xl' : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-indigo-200'}`}
                      >
                        <div>
                          <p className="text-lg">{t}</p>
                          <p className={`text-xs font-medium mt-1 ${topic === t ? 'text-indigo-200' : 'text-slate-400'}`}>
                            {progress[t]}/{TOTAL_LEVELS} levels unlocked
                          </p>
                        </div>
                        {topic === t && <CheckCircle size={22} />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Level Selection Grid */}
                <div className="space-y-6">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center">
                    <TrendingUp size={14} className="mr-2 text-indigo-500" /> Select Level
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    {Array.from({ length: TOTAL_LEVELS }, (_, i) => i + 1).map(lvl => {
                      const isUnlocked = lvl <= progress[topic];
                      const isSelected = level === lvl;
                      return (
                        <motion.button
                          key={lvl}
                          onClick={() => isUnlocked && setLevel(lvl)}
                          whileHover={isUnlocked ? { scale: 1.05 } : {}}
                          whileTap={isUnlocked ? { scale: 0.95 } : {}}
                          className={`relative p-5 rounded-3xl border-2 transition-all flex flex-col items-center gap-2 ${
                            isSelected
                              ? 'border-indigo-500 shadow-xl shadow-indigo-500/20'
                              : isUnlocked
                                ? 'border-slate-200 dark:border-slate-700 hover:border-indigo-300'
                                : 'border-slate-100 dark:border-slate-800 opacity-50 cursor-not-allowed'
                          } ${isSelected ? 'bg-indigo-50 dark:bg-indigo-900/30' : 'bg-white dark:bg-slate-900'}`}
                        >
                          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-white text-sm font-black bg-gradient-to-br ${levelColors[lvl]}`}>
                            {isUnlocked ? lvl : <Lock size={14} />}
                          </div>
                          <div className="text-center">
                            <p className={`text-xs font-black leading-tight ${isSelected ? 'text-indigo-600 dark:text-cyan-400' : 'text-slate-700 dark:text-slate-300'}`}>
                              Lvl {lvl}
                            </p>
                            <p className="text-[10px] text-slate-400 leading-tight">{levelLabels[lvl]}</p>
                          </div>
                          {lvl === progress[topic] && lvl < TOTAL_LEVELS && (
                            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-900" />
                          )}
                          {lvl < progress[topic] && (
                            <CheckCircle size={12} className="text-green-500 absolute top-2 right-2" />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                  <p className="text-xs text-slate-400 font-medium text-center">
                    🔓 Score 80% or higher (8/10) to unlock the next level
                  </p>
                </div>

                <button
                  onClick={startQuiz}
                  disabled={level > progress[topic]}
                  className="w-full py-6 bg-indigo-600 text-white rounded-[2.5rem] font-black tracking-[0.2em] text-sm shadow-2xl shadow-indigo-500/30 hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center group disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span>START LEVEL {level} — {levelLabels[level].toUpperCase()}</span>
                  <ChevronRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            )}

            {/* ACTIVE QUIZ */}
            {quizState === 'active' && questions.length > 0 && (
              <div className="max-w-4xl mx-auto py-10">
                {/* Header */}
                <div className="flex justify-between items-end mb-12 gap-8">
                  <div className="space-y-2">
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.25em] text-white bg-gradient-to-r ${levelColors[level]}`}>
                      <Star size={10} />
                      {topic} • {levelLabels[level]} (Level {level})
                    </div>
                    <h3 className="text-xl font-bold text-slate-400">
                      Question {currentQuestion + 1} <span className="text-slate-300 font-medium">/ {questions.length}</span>
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-black text-indigo-600 dark:text-cyan-400">{score} ✓</span>
                    <div className="flex-1 w-40 h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Question */}
                <AnimatePresence mode="wait">
                  <motion.h4
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="text-2xl md:text-4xl font-black mb-12 leading-tight tracking-tight"
                  >
                    {questions[currentQuestion].text}
                  </motion.h4>
                </AnimatePresence>

                {/* Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {questions[currentQuestion].options.map((option, index) => {
                    const isCorrect = index === questions[currentQuestion].correctAnswer;
                    const isSelected = selectedAnswer === index;
                    let btnClass = "p-6 border-2 border-slate-100 dark:border-slate-800 rounded-[2.5rem] text-left font-bold transition-all flex items-center group relative overflow-hidden bg-white dark:bg-slate-900";

                    if (showFeedback) {
                      if (isCorrect) btnClass += " border-green-500 bg-green-50 dark:bg-green-900/20";
                      else if (isSelected) btnClass += " border-red-500 bg-red-50 dark:bg-red-900/20";
                      else btnClass += " opacity-40";
                    } else {
                      btnClass += " hover:border-indigo-500 hover:shadow-2xl cursor-pointer";
                    }

                    return (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                        whileHover={!showFeedback ? { scale: 1.02, x: 6 } : {}}
                        whileTap={!showFeedback ? { scale: 0.97 } : {}}
                        onClick={() => handleAnswer(index)}
                        className={btnClass}
                        disabled={showFeedback}
                      >
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center mr-5 font-black text-base flex-shrink-0 transition-all ${
                          showFeedback && isCorrect ? 'bg-green-500 text-white' :
                          showFeedback && isSelected ? 'bg-red-500 text-white' :
                          'bg-slate-50 dark:bg-slate-800 group-hover:bg-indigo-600 group-hover:text-white'
                        }`}>
                          {showFeedback && isCorrect ? <CheckCircle size={18} /> :
                           showFeedback && isSelected && !isCorrect ? <XCircle size={18} /> :
                           String.fromCharCode(65 + index)}
                        </div>
                        <span className={`flex-1 text-base ${showFeedback && isCorrect ? 'text-green-700 dark:text-green-400' : showFeedback && isSelected ? 'text-red-700 dark:text-red-400' : 'group-hover:text-indigo-600 dark:group-hover:text-cyan-400'}`}>
                          {option}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Feedback Banner */}
                <AnimatePresence>
                  {showFeedback && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`mt-6 p-5 rounded-3xl text-sm font-bold flex items-center gap-3 ${
                        selectedAnswer === questions[currentQuestion].correctAnswer
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                      }`}
                    >
                      {selectedAnswer === questions[currentQuestion].correctAnswer ? (
                        <><CheckCircle size={18} /> Correct! Well done.</>
                      ) : (
                        <><XCircle size={18} /> Incorrect. The correct answer is: <strong>{questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}</strong></>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* RESULT SCREEN */}
            {quizState === 'result' && (
              <div className="max-w-2xl mx-auto py-10 text-center space-y-10">
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className={`w-40 h-40 rounded-[3rem] flex items-center justify-center text-white mx-auto shadow-2xl relative bg-gradient-to-br ${passedCurrentLevel ? 'from-indigo-500 to-violet-600 shadow-indigo-500/40' : 'from-slate-400 to-slate-600 shadow-slate-500/40'}`}
                >
                  {passedCurrentLevel ? <Trophy size={72} /> : <RefreshCw size={72} />}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute -inset-4 border-2 rounded-[3.5rem] opacity-30 ${passedCurrentLevel ? 'border-indigo-500' : 'border-slate-400'}`}
                  />
                </motion.div>

                {levelUnlocked && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="px-6 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-3xl text-white font-black inline-flex items-center gap-3 shadow-xl shadow-amber-400/30"
                  >
                    <Unlock size={22} />
                    <span>🎉 Level {level + 1} — {levelLabels[level + 1]} Unlocked!</span>
                  </motion.div>
                )}

                <div className="space-y-3">
                  <h2 className="text-5xl font-black tracking-tight italic leading-tight">
                    {passedCurrentLevel ? 'Level' : 'Almost'}
                    <br />
                    <span className={passedCurrentLevel ? 'text-indigo-600 dark:text-cyan-400' : 'text-slate-500'}>
                      {passedCurrentLevel ? 'Passed!' : 'There!'}
                    </span>
                  </h2>
                  <p className="text-slate-500 font-medium text-lg">
                    {passedCurrentLevel
                      ? `Excellent! You've mastered Level ${level} — ${levelLabels[level]}.`
                      : `You need 8/10 to pass. Try again to unlock the next level!`}
                  </p>
                </div>

                {/* Score cards */}
                <div className="grid grid-cols-3 gap-5">
                  <div className="glass p-8 rounded-[2.5rem] space-y-2 border-indigo-500/10">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Score</p>
                    <p className={`text-5xl font-black tracking-tighter ${passedCurrentLevel ? 'text-indigo-600' : 'text-slate-500'}`}>
                      {score}<span className="text-2xl text-slate-300">/{questions.length}</span>
                    </p>
                  </div>
                  <div className="glass p-8 rounded-[2.5rem] space-y-2 border-indigo-500/10">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Accuracy</p>
                    <p className={`text-5xl font-black tracking-tighter ${passedCurrentLevel ? 'text-indigo-600' : 'text-slate-500'}`}>
                      {Math.round((score / questions.length) * 100)}<span className="text-2xl text-slate-300">%</span>
                    </p>
                  </div>
                  <div className="glass p-8 rounded-[2.5rem] space-y-2 border-indigo-500/10">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Pass Mark</p>
                    <p className="text-5xl font-black tracking-tighter text-slate-400">
                      80<span className="text-2xl text-slate-300">%</span>
                    </p>
                  </div>
                </div>

                {/* Review Breakdown */}
                <div className="space-y-3 text-left">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 text-center mb-4">Answer Review</p>
                  {userAnswers.map((ans, i) => (
                    <div key={i} className={`p-4 rounded-2xl text-sm flex items-start gap-3 ${ans.correct ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300' : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'}`}>
                      <span className="mt-0.5">{ans.correct ? <CheckCircle size={15} /> : <XCircle size={15} />}</span>
                      <div>
                        <p className="font-bold text-xs opacity-80 mb-0.5">Q{i + 1}: {ans.question.substring(0, 60)}...</p>
                        {!ans.correct && <p className="font-medium text-xs">Correct: <strong>{ans.correctAnswer}</strong></p>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-4">
                  <button
                    onClick={startQuiz}
                    className="w-full py-6 bg-indigo-600 text-white rounded-[2.5rem] font-black tracking-[0.2em] text-sm shadow-2xl shadow-indigo-500/30 hover:bg-indigo-700 transition-all flex items-center justify-center gap-3"
                  >
                    <RefreshCw size={20} /> RETRY LEVEL {level}
                  </button>
                  {passedCurrentLevel && level < TOTAL_LEVELS && (
                    <button
                      onClick={() => { setLevel(level + 1); setQuizState('config'); }}
                      className="w-full py-6 bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-[2.5rem] font-black tracking-[0.2em] text-sm shadow-2xl shadow-amber-500/30 hover:opacity-90 transition-all flex items-center justify-center gap-3"
                    >
                      <ChevronRight size={20} /> NEXT: LEVEL {level + 1} — {levelLabels[level + 1].toUpperCase()}
                    </button>
                  )}
                  {level === TOTAL_LEVELS && passedCurrentLevel && (
                    <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black text-center">
                      🏆 Congratulations! You've completed ALL 10 Levels of {topic}!
                    </div>
                  )}
                  <button
                    onClick={() => setQuizState('config')}
                    className="w-full py-5 glass border-slate-200 dark:border-slate-800 rounded-[2.5rem] font-black tracking-[0.2em] text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-3"
                  >
                    <ChevronLeft size={18} /> BACK TO LEVEL SELECT
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          /* Chat Tab */
          <motion.div
            key="chat-tab"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[750px]"
          >
            <div className="lg:col-span-4 space-y-8">
              <div className="glass rounded-[3.5rem] p-10 border-indigo-500/5 shadow-2xl">
                <h3 className="font-black text-2xl mb-8 flex items-center italic">
                  <TrendingUp size={24} className="mr-3 text-indigo-600" /> Your Progress
                </h3>
                <div className="space-y-5">
                  {['Grammar', 'Vocabulary', 'Scenario'].map(t => (
                    <div key={t} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                        <span>{t}</span>
                        <span className="text-indigo-500">{progress[t] - 1}/{TOTAL_LEVELS} done</span>
                      </div>
                      <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${((progress[t] - 1) / TOTAL_LEVELS) * 100}%` }}
                          transition={{ duration: 1.5, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-[3.5rem] p-10 border-indigo-500/5 shadow-2xl bg-gradient-to-br from-indigo-600 to-violet-700 text-white relative overflow-hidden group">
                <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                <h3 className="font-black text-2xl mb-4 italic flex items-center">
                  <Trophy size={24} className="mr-3 text-yellow-400" /> Smart Practice
                </h3>
                <p className="text-sm font-medium opacity-80 mb-8 leading-relaxed">Try these scenarios with your AI Coach.</p>
                <div className="space-y-3">
                  {['Salary Negotiation', 'Job Interview Prep', 'Project Presentation'].map(s => (
                    <button key={s} onClick={() => { setInput(`Help me practice: ${s}`); setActiveTab('chat'); }} className="w-full p-4 bg-white/10 hover:bg-white/20 rounded-2xl text-left text-xs font-black tracking-widest transition-all">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 glass rounded-[3.5rem] border-indigo-500/10 shadow-[0_32px_64px_-12px_rgba(99,102,241,0.12)] flex flex-col overflow-hidden relative">
              <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white/50 dark:bg-slate-900/50 backdrop-blur-2xl">
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-500/20">
                    <Bot size={28} />
                  </div>
                  <div>
                    <h3 className="font-black text-lg tracking-tight leading-none italic">AI Prep Coach</h3>
                    <p className="text-[10px] text-green-500 font-black uppercase tracking-[0.2em] mt-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" /> Live Assistance
                    </p>
                  </div>
                </div>
              </div>

              <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-8 scroll-smooth">
                {messages.map((m, i) => (
                  <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} key={i} className={`flex ${m.role === 'assistant' ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-[85%] p-6 rounded-[2.5rem] text-sm leading-relaxed shadow-sm ${m.role === 'assistant' ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none' : 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/20 rounded-br-none font-medium'}`}>
                      {m.content}
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-slate-100 dark:bg-slate-800 p-6 px-8 rounded-[2rem] rounded-bl-none flex space-x-1.5">
                      <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity }} className="w-2 h-2 bg-indigo-500 rounded-full" />
                      <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 bg-indigo-500 rounded-full" />
                      <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 bg-indigo-500 rounded-full" />
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSendMessage} className="p-8 bg-white/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800">
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask the coach anything..."
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] px-10 py-6 pr-20 text-sm outline-none shadow-sm focus:ring-4 ring-indigo-500/10 focus:border-indigo-500/40 transition-all"
                  />
                  <button type="submit" disabled={isTyping} className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 active:scale-90 flex items-center justify-center disabled:opacity-50">
                    <Send size={22} />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AITrainer;
