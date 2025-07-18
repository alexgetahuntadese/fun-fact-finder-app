
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import QuizDashboard from "@/components/QuizDashboard";
import QuizInterface from "@/components/QuizInterface";

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'login' | 'register' | 'dashboard' | 'quiz'>('home');
  const [user, setUser] = useState<{ name: string; grade: string; school?: string } | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<any>(null);

  const handleLogin = (userData: { name: string; grade: string; school?: string }) => {
    setUser(userData);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setSelectedQuiz(null);
    setCurrentView('home');
  };

  const handleSelectQuiz = (quiz: any) => {
    console.log('Quiz selected:', quiz);
    setSelectedQuiz(quiz);
    setCurrentView('quiz');
  };

  const handleQuizComplete = (result: any) => {
    console.log('Quiz completed with result:', result);
    setSelectedQuiz(null);
    setCurrentView('dashboard');
  };

  const handleBackToDashboard = () => {
    setSelectedQuiz(null);
    setCurrentView('dashboard');
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

  if (currentView === 'quiz' && selectedQuiz && user) {
    return (
      <QuizInterface 
        quiz={selectedQuiz}
        user={user}
        onComplete={handleQuizComplete}
        onBack={handleBackToDashboard}
      />
    );
  }

  if (currentView === 'dashboard' && user) {
    return (
      <QuizDashboard 
        user={user} 
        onLogout={handleLogout}
        onSelectQuiz={handleSelectQuiz}
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
            Grades 1-12 • Interactive Quizzes • Progress Tracking
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
              <div className="text-2xl font-bold text-purple-400">12</div>
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
