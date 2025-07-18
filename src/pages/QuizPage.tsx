import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, CheckCircle, XCircle, Trophy, RotateCcw } from 'lucide-react';
import { grade12Mathematics, getMathQuestionsForQuiz } from '@/data/grade12Mathematics';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const QuizPage = () => {
  const navigate = useNavigate();
  const { grade, subject, chapterId, difficulty } = useParams();
  const decodedSubject = decodeURIComponent(subject || '');
  const decodedChapter = decodeURIComponent(chapterId || '');
  const selectedDifficulty = decodeURIComponent(difficulty || '') as 'Easy' | 'Medium' | 'Hard';

  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Initialize questions only once when component mounts
  useEffect(() => {
    const initializeQuestions = () => {
      if (decodedSubject === 'Mathematics' && grade === '12' && grade12Mathematics[decodedChapter]) {
        // Get questions from the chapter filtered by difficulty
        const chapterQuestions = grade12Mathematics[decodedChapter];
        const filteredQuestions = chapterQuestions.filter(q => q.difficulty === selectedDifficulty);
        
        if (filteredQuestions.length === 0) {
          // Fallback to all questions if no questions found for selected difficulty
          const shuffled = [...chapterQuestions].sort(() => Math.random() - 0.5);
          return shuffled.slice(0, 10).map((q, index) => ({
            id: index + 1,
            question: q.question,
            options: q.options,
            correctAnswer: q.options.indexOf(q.correct),
            explanation: q.explanation
          }));
        }
        
        // Shuffle and take up to 10 questions from the selected difficulty
        const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
        const questionsToTake = Math.min(10, shuffled.length);
        return shuffled.slice(0, questionsToTake).map((q, index) => ({
          id: index + 1,
          question: q.question,
          options: q.options,
          correctAnswer: q.options.indexOf(q.correct),
          explanation: q.explanation
        }));
      }
      
      // Default mock questions for other subjects/grades
      return [
        {
          id: 1,
          question: "What is 2 + 3?",
          options: ["4", "5", "6", "7"],
          correctAnswer: 1,
          explanation: "2 + 3 = 5. This is basic addition."
        },
        {
          id: 2,
          question: "Which number comes after 9?",
          options: ["8", "10", "11", "12"],
          correctAnswer: 1,
          explanation: "The number sequence continues: 8, 9, 10, 11..."
        },
        {
          id: 3,
          question: "What is 10 - 4?",
          options: ["5", "6", "7", "8"],
          correctAnswer: 1,
          explanation: "10 - 4 = 6. This is basic subtraction."
        },
        {
          id: 4,
          question: "How many sides does a triangle have?",
          options: ["2", "3", "4", "5"],
          correctAnswer: 1,
          explanation: "A triangle has exactly 3 sides by definition."
        },
        {
          id: 5,
          question: "What is 3 × 2?",
          options: ["5", "6", "7", "8"],
          correctAnswer: 1,
          explanation: "3 × 2 = 6. This is basic multiplication."
        }
      ];
    };

    const quizQuestions = initializeQuestions();
    setQuestions(quizQuestions);
    setAnswers(new Array(quizQuestions.length).fill(null));
    setIsLoading(false); // Mark loading as complete
  }, [decodedSubject, grade, decodedChapter, selectedDifficulty]);

  useEffect(() => {
    if (timeLeft > 0 && !quizCompleted) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setQuizCompleted(true);
            setShowResult(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [quizCompleted]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showExplanation) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleNext = () => {
    if (selectedAnswer !== null && !showExplanation) {
      // Show explanation first
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);
      setShowExplanation(true);
    } else if (showExplanation) {
      // Move to next question or complete quiz
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(answers[currentQuestion + 1]);
        setShowExplanation(false);
      } else {
        handleQuizComplete();
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0 && !showExplanation) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1]);
    }
  };

  const handleQuizComplete = () => {
    const finalAnswers = [...answers];
    if (selectedAnswer !== null) {
      finalAnswers[currentQuestion] = selectedAnswer;
    }
    
    const correctAnswers = finalAnswers.reduce((count, answer, index) => {
      return answer === questions[index].correctAnswer ? count + 1 : count;
    }, 0);
    
    setScore(correctAnswers);
    setQuizCompleted(true);
    setShowResult(true);
  };

  const handleRetake = () => {
    setIsLoading(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowResult(false);
    setScore(0);
    setTimeLeft(1800);
    setQuizCompleted(false);
    
    // Generate new questions for retake
    const initializeQuestions = () => {
      if (decodedSubject === 'Mathematics' && grade === '12' && grade12Mathematics[decodedChapter]) {
        const chapterQuestions = grade12Mathematics[decodedChapter];
        const filteredQuestions = chapterQuestions.filter(q => q.difficulty === selectedDifficulty);
        
        if (filteredQuestions.length === 0) {
          const shuffled = [...chapterQuestions].sort(() => Math.random() - 0.5);
          return shuffled.slice(0, 10).map((q, index) => ({
            id: index + 1,
            question: q.question,
            options: q.options,
            correctAnswer: q.options.indexOf(q.correct),
            explanation: q.explanation
          }));
        }
        
        const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
        const questionsToTake = Math.min(10, shuffled.length);
        return shuffled.slice(0, questionsToTake).map((q, index) => ({
          id: index + 1,
          question: q.question,
          options: q.options,
          correctAnswer: q.options.indexOf(q.correct),
          explanation: q.explanation
        }));
      }
      return questions; // Keep existing questions for non-math subjects
    };
    
    const newQuestions = initializeQuestions();
    setQuestions(newQuestions);
    setAnswers(new Array(newQuestions.length).fill(null));
    setIsLoading(false);
  };

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'text-green-500';
    if (percentage >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getAnswerStatus = (answerIndex: number) => {
    const correctAnswer = questions[currentQuestion]?.correctAnswer;
    const isCorrect = answerIndex === correctAnswer;
    const isSelected = answerIndex === selectedAnswer;
    
    if (!showExplanation) {
      return isSelected ? 'selected' : 'default';
    }
    
    if (isCorrect) return 'correct';
    if (isSelected && !isCorrect) return 'incorrect';
    return 'default';
  };

  const getAnswerStyle = (status: string) => {
    switch (status) {
      case 'correct':
        return 'border-green-500 bg-green-500/20 text-green-300';
      case 'incorrect':
        return 'border-red-500 bg-red-500/20 text-red-300';
      case 'selected':
        return 'border-blue-500 bg-blue-500/20 text-white';
      default:
        return 'border-white/20 bg-white/10 text-gray-300 hover:border-white/40 hover:bg-white/20';
    }
  };

  const progress = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  // Show loading state while questions are being prepared
  if (isLoading || questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Preparing your quiz...</p>
        </div>
      </div>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Quiz Complete!</h1>
            <p className="text-xl text-blue-200">
              {decodedSubject} • {decodedChapter} • {selectedDifficulty} • Grade {grade}
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-3xl mb-4">Your Score</CardTitle>
              <div className={`text-6xl font-bold mb-4 ${getScoreColor(score, questions.length)}`}>
                {score}/{questions.length}
              </div>
              <Badge className={percentage >= 80 ? 'bg-green-500' : percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'}>
                {percentage}% Complete
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{score}</div>
                  <div className="text-gray-300">Correct</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <XCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{questions.length - score}</div>
                  <div className="text-gray-300">Incorrect</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{formatTime(1800 - timeLeft)}</div>
                  <div className="text-gray-300">Time Used</div>
                </div>
              </div>
            </CardContent>
        </Card>

        {showExplanation && (
          <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                Explanation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-200 leading-relaxed">
                {questions[currentQuestion]?.explanation}
              </p>
            </CardContent>
          </Card>
        )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleRetake}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Retake Quiz
            </Button>
            <Button 
              onClick={() => navigate(`/grade/${grade}/subject/${encodeURIComponent(decodedSubject)}/chapters`)}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
            >
              Back to Chapters
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate(`/grade/${grade}/subjects`)}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Choose Another Subject
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/20"
            onClick={() => navigate(`/grade/${grade}/subject/${encodeURIComponent(decodedSubject)}/chapters`)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Chapters
          </Button>
          
          <div className="flex items-center space-x-4 text-white">
            <Badge variant="secondary" className="bg-white/20 text-white">
              {selectedDifficulty} Level
            </Badge>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white">
              Question {currentQuestion + 1} of {questions.length}
            </Badge>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-medium">Progress</span>
            <span className="text-white font-medium">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
            <CardDescription className="text-blue-200">
              {decodedSubject} • {decodedChapter} • {selectedDifficulty} Level • Grade {grade}
            </CardDescription>
            </div>
            <CardTitle className="text-white text-2xl leading-relaxed">
              {questions[currentQuestion]?.question || "Loading question..."}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {questions[currentQuestion]?.options?.map((option, index) => {
                const status = getAnswerStatus(index);
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${getAnswerStyle(status)} ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <span className="font-medium mr-3">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                  </button>
                );
              }) || <p className="text-white">Loading options...</p>}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button 
            onClick={handlePrevious}
            disabled={currentQuestion === 0 || showExplanation}
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 disabled:opacity-50"
          >
            Previous
          </Button>
          
          <Button 
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white disabled:opacity-50"
          >
            {showExplanation 
              ? (currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question')
              : 'Show Answer'
            }
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;