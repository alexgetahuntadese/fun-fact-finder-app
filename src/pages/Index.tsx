
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import QuizInterface from "@/components/QuizInterface";
import GradeSelection from "./GradeSelection";
import SubjectSelection from "./SubjectSelection";
import ChaptersPage from "./ChaptersPage";
import QuizPage from "./QuizPage";

const Index = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState<'home' | 'login' | 'register' | 'grades' | 'subjects' | 'chapters' | 'quiz' | 'quiz-interface'>('home');
  const [user, setUser] = useState<{ name: string; grade: string; school?: string } | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<any>(null);
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

  const handleLogin = (userData: { name: string; grade: string; school?: string }) => {
    setUser(userData);
    setCurrentView('grades');
  };

  const handleLogout = () => {
    setUser(null);
    setSelectedQuiz(null);
    setSelectedGrade(null);
    setSelectedSubject(null);
    setSelectedChapter(null);
    setCurrentView('home');
  };

  const handleGradeSelect = (grade: number) => {
    setSelectedGrade(grade);
    setCurrentView('subjects');
  };

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
    setCurrentView('chapters');
  };

  const handleChapterSelect = (chapter: string) => {
    setSelectedChapter(chapter);
    setCurrentView('quiz');
  };

  const handleSelectQuiz = (quiz: any) => {
    console.log('Quiz selected:', quiz);
    setSelectedQuiz(quiz);
    setCurrentView('quiz-interface');
  };

  const handleQuizComplete = (result: any) => {
    console.log('Quiz completed with result:', result);
    setSelectedQuiz(null);
    setCurrentView('grades');
  };

  const handleBackToGrades = () => {
    setSelectedQuiz(null);
    setSelectedGrade(null);
    setSelectedSubject(null);
    setSelectedChapter(null);
    setCurrentView('grades');
  };

  const handleBackToSubjects = () => {
    setSelectedSubject(null);
    setSelectedChapter(null);
    setCurrentView('subjects');
  };

  const handleBackToChapters = () => {
    setSelectedChapter(null);
    setCurrentView('chapters');
  };

  if (currentView === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <LoginForm 
          onLogin={handleLogin} 
          onSwitchToRegister={() => setCurrentView('register')}
          onBack={() => setCurrentView('home')} 
        />
      </div>
    );
  }

  if (currentView === 'register') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <RegisterForm 
          onRegister={handleLogin} 
          onSwitchToLogin={() => setCurrentView('login')}
          onBack={() => setCurrentView('home')} 
        />
      </div>
    );
  }

  if (currentView === 'quiz-interface' && selectedQuiz && user) {
    return (
      <QuizInterface 
        quiz={selectedQuiz}
        user={user}
        onComplete={handleQuizComplete}
        onBack={handleBackToGrades}
      />
    );
  }

  if (currentView === 'grades' && user) {
    return (
      <GradeSelection 
        user={user} 
        onLogout={handleLogout}
        onGradeSelect={handleGradeSelect}
      />
    );
  }

  if (currentView === 'subjects' && user && selectedGrade) {
    return (
      <SubjectSelection 
        user={user} 
        grade={selectedGrade}
        onBack={handleBackToGrades}
        onSubjectSelect={handleSubjectSelect}
      />
    );
  }

  if (currentView === 'chapters' && user && selectedGrade && selectedSubject) {
    return (
      <ChaptersPage 
        user={user}
        grade={selectedGrade}
        subject={selectedSubject}
        onBack={handleBackToSubjects}
        onChapterSelect={handleChapterSelect}
      />
    );
  }

  if (currentView === 'quiz' && user && selectedGrade && selectedSubject && selectedChapter) {
    return (
      <QuizPage 
        user={user}
        grade={selectedGrade}
        subject={selectedSubject}
        chapter={selectedChapter}
        onBack={handleBackToChapters}
        onStartQuiz={handleSelectQuiz}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4 animate-fade-in">
            EthioQuiz 2050
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Advanced Learning Platform for Ethiopian Students
          </p>
          <div className="text-lg text-purple-200">
            Grades 9-12 • Interactive Quizzes • Progress Tracking
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white text-2xl">New Student?</CardTitle>
              <CardDescription className="text-blue-200">
                Join thousands of Ethiopian students preparing for their future
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => setCurrentView('register')}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3"
              >
                Create Account
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Welcome Back!</CardTitle>
              <CardDescription className="text-blue-200">
                Continue your learning journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => setCurrentView('login')}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3"
              >
                Sign In
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white/80">
            <div>
              <div className="text-2xl font-bold text-green-400">2050+</div>
              <div className="text-sm">Questions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">12</div>
              <div className="text-sm">Subjects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">4</div>
              <div className="text-sm">Grade Levels</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-400">AI</div>
              <div className="text-sm">Powered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
