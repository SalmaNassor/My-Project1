import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ExamDetails = () => {
  const { id } = useParams();
  const [exam, setExam] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/exams/${id}/`)
      .then(response => {
        setExam(response.data);
        setTimeLeft(response.data.duration * 60); // assuming duration is in minutes
      })
      .catch(error => {
        console.error('There was an error fetching the exam details', error);
      });
  }, [id]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8000/api/exams/${id}/submit`, answers)
      .then(response => {
        alert('Exam submitted successfully!');
      })
      .catch(error => {
        console.error('There was an error submitting the exam', error);
      });
  };

  if (!exam) {
    return <div>Loading...</div>;
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const choiceLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className='exam-details'>
      <h1>{exam.course}</h1>
      <p>{exam.question.question_desc}</p>
      <p>Date: {exam.date}</p>
      <p>Duration: {exam.duration} minutes</p>
      <p>Time left: {formatTime(timeLeft)}</p>
      <form onSubmit={handleSubmit}>
        {exam.questions && exam.questions.map((question) => (
          <div key={question.id} className="question">
            <h3>{question.text}</h3>
            {question.choices.map((choice, index) => (
              <div key={choice.id} className="choice">
                <input
                  type="radio"
                  id={`question-${question.id}-choice-${choice.id}`}
                  name={`question-${question.id}`}
                  value={choice.id}
                  onChange={() => handleAnswerChange(question.id, choice.id)}
                />
                <label htmlFor={`question-${question.id}-choice-${choice.id}`}>
                  {choiceLabels[index]}. {choice.text}
                </label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Submit Exam</button>
      </form>
    </div>
  );
}

export default ExamDetails;
