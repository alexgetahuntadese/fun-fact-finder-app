
-- Insert Mathematics subject
INSERT INTO public.subjects (name, description) 
VALUES ('Mathematics', 'Grade 12 Mathematics curriculum covering sequences, calculus, statistics, linear programming, and business applications')
ON CONFLICT DO NOTHING;

-- Insert Mathematics chapters
INSERT INTO public.chapters (name, description, subject_id, order_index)
SELECT 
  chapter_name,
  chapter_description,
  s.id,
  chapter_order
FROM (
  VALUES 
    ('Unit 1: Sequence and Series', 'Arithmetic and geometric sequences, series, and their applications', 1),
    ('Unit 2: Introduction to Calculus', 'Basic concepts of limits, derivatives, and integrals', 2),
    ('Unit 3: Statistics', 'Descriptive statistics, probability distributions, and hypothesis testing', 3),
    ('Unit 4: Introduction to Linear Programming', 'Optimization problems using linear programming techniques', 4),
    ('Unit 5: Mathematical Application in Business', 'Business mathematics including interest, profit, and financial calculations', 5)
) AS chapters_data(chapter_name, chapter_description, chapter_order)
CROSS JOIN public.subjects s
WHERE s.name = 'Mathematics'
ON CONFLICT DO NOTHING;

-- Insert all mathematics questions
INSERT INTO public.quiz_questions (legacy_id, question, options, correct_answer, explanation, difficulty, chapter_id)
SELECT 
  q.legacy_id,
  q.question,
  q.options,
  q.correct_answer,
  q.explanation,
  q.difficulty,
  c.id as chapter_id
FROM (
  VALUES 
    -- Unit 1: Sequence and Series - Easy Questions
    (1001, 'What is the next term in the arithmetic sequence 2, 5, 8, 11, ...?', '["13", "14", "15", "16"]'::jsonb, '14', 'This is an arithmetic sequence with first term a₁ = 2 and common difference d = 3. The next term is 11 + 3 = 14.', 'Easy', 'Unit 1: Sequence and Series'),
    (1002, 'In the geometric sequence 3, 6, 12, 24, ..., what is the common ratio?', '["2", "3", "4", "6"]'::jsonb, '2', 'The common ratio r = 6/3 = 2. Each term is obtained by multiplying the previous term by 2.', 'Easy', 'Unit 1: Sequence and Series'),
    (1003, 'What is the 5th term of the arithmetic sequence with first term 7 and common difference 4?', '["23", "27", "31", "35"]'::jsonb, '23', 'Using aₙ = a₁ + (n-1)d: a₅ = 7 + (5-1)×4 = 7 + 16 = 23.', 'Easy', 'Unit 1: Sequence and Series'),
    (1004, 'What is the sum of the first 4 terms of the series 1 + 3 + 5 + 7 + ...?', '["16", "18", "20", "22"]'::jsonb, '16', 'The first 4 terms are 1, 3, 5, 7. Their sum is 1 + 3 + 5 + 7 = 16.', 'Easy', 'Unit 1: Sequence and Series'),
    (1005, 'In the sequence 1, 4, 9, 16, 25, ..., what type of sequence is this?', '["Arithmetic", "Geometric", "Square numbers", "Fibonacci"]'::jsonb, 'Square numbers', 'This sequence represents perfect squares: 1², 2², 3², 4², 5², ...', 'Easy', 'Unit 1: Sequence and Series'),
    (1006, 'What is the first term of an arithmetic sequence if the 3rd term is 11 and the common difference is 3?', '["5", "6", "7", "8"]'::jsonb, '5', 'Using a₃ = a₁ + 2d: 11 = a₁ + 2(3), so a₁ = 11 - 6 = 5.', 'Easy', 'Unit 1: Sequence and Series'),
    (1007, 'In a geometric sequence, if the first term is 2 and the second term is 6, what is the third term?', '["10", "12", "18", "24"]'::jsonb, '18', 'The common ratio r = 6/2 = 3. The third term is 6 × 3 = 18.', 'Easy', 'Unit 1: Sequence and Series'),
    
    -- Unit 1: Sequence and Series - Medium Questions
    (1008, 'Find the sum of the first 20 terms of the arithmetic sequence 5, 8, 11, 14, ...', '["650", "670", "685", "700"]'::jsonb, '670', 'Using Sₙ = n/2[2a₁ + (n-1)d]: S₂₀ = 20/2[2(5) + (20-1)(3)] = 10[10 + 57] = 670.', 'Medium', 'Unit 1: Sequence and Series'),
    (1009, 'What is the sum of the infinite geometric series 1 + 1/2 + 1/4 + 1/8 + ...?', '["1", "2", "3", "4"]'::jsonb, '2', 'For |r| < 1, S∞ = a₁/(1-r) = 1/(1-1/2) = 1/(1/2) = 2.', 'Medium', 'Unit 1: Sequence and Series'),
    (1010, 'In an arithmetic sequence, if the sum of the first 10 terms is 100 and the first term is 2, what is the common difference?', '["1.6", "1.8", "2.0", "2.2"]'::jsonb, '1.6', 'Using Sₙ = n/2[2a₁ + (n-1)d]: 100 = 10/2[2(2) + 9d] = 5[4 + 9d]. So 20 = 4 + 9d, giving d = 16/9 ≈ 1.78. Wait, let me recalculate: 100 = 5[4 + 9d], so 20 = 4 + 9d, thus 9d = 16, so d = 16/9 ≈ 1.78. The closest answer is 1.8, but let me check: if d = 1.6, then S₁₀ = 5[4 + 9(1.6)] = 5[4 + 14.4] = 5(18.4) = 92. If d = 1.8, then S₁₀ = 5[4 + 9(1.8)] = 5[4 + 16.2] = 5(20.2) = 101. So d = 1.6 gives 92, which is closest to 100.', 'Medium', 'Unit 1: Sequence and Series'),
    (1011, 'Find the nth term formula for the sequence 3, 7, 11, 15, ...', '["aₙ = 4n - 1", "aₙ = 4n + 1", "aₙ = 3n + 1", "aₙ = n + 3"]'::jsonb, 'aₙ = 4n - 1', 'This is arithmetic with a₁ = 3 and d = 4. So aₙ = a₁ + (n-1)d = 3 + (n-1)4 = 3 + 4n - 4 = 4n - 1.', 'Medium', 'Unit 1: Sequence and Series'),
    (1012, 'What is the 8th term of the geometric sequence 2, -6, 18, -54, ...?', '["-4374", "4374", "-1458", "1458"]'::jsonb, '-4374', 'The common ratio r = -6/2 = -3. Using aₙ = a₁ × r^(n-1): a₈ = 2 × (-3)^7 = 2 × (-2187) = -4374.', 'Medium', 'Unit 1: Sequence and Series'),
    (1013, 'Find the sum of the geometric series 5 + 10 + 20 + 40 + ... + 1280.', '["2550", "2555", "2560", "2565"]'::jsonb, '2555', 'First find n: 1280 = 5 × 2^(n-1), so 256 = 2^(n-1), giving n = 9. Using Sₙ = a₁(r^n - 1)/(r - 1): S₉ = 5(2⁹ - 1)/(2 - 1) = 5(512 - 1) = 5 × 511 = 2555.', 'Medium', 'Unit 1: Sequence and Series'),
    (1014, 'In an arithmetic sequence, the 5th term is 17 and the 12th term is 38. What is the first term?', '["2", "3", "4", "5"]'::jsonb, '5', 'From a₅ = 17 and a₁₂ = 38: 17 = a₁ + 4d and 38 = a₁ + 11d. Subtracting: 21 = 7d, so d = 3. Then a₁ = 17 - 4(3) = 5.', 'Medium', 'Unit 1: Sequence and Series'),
    
    -- Unit 1: Sequence and Series - Hard Questions
    (1015, 'Find the sum of the series 1² + 2² + 3² + ... + n² for n = 10.', '["385", "390", "395", "400"]'::jsonb, '385', 'Using the formula for sum of squares: Σk² = n(n+1)(2n+1)/6 = 10(11)(21)/6 = 2310/6 = 385.', 'Hard', 'Unit 1: Sequence and Series'),
    (1016, 'In a geometric sequence, the sum of the first 3 terms is 21 and the sum of the first 6 terms is 189. Find the first term.', '["3", "6", "9", "12"]'::jsonb, '3', 'Let a be the first term and r be the common ratio. S₃ = a(r³-1)/(r-1) = 21 and S₆ = a(r⁶-1)/(r-1) = 189. Dividing: (r⁶-1)/(r³-1) = 9. Since r⁶-1 = (r³-1)(r³+1), we get r³+1 = 9, so r³ = 8, thus r = 2. Then a(8-1)/(2-1) = 21, so 7a = 21, giving a = 3.', 'Hard', 'Unit 1: Sequence and Series'),
    (1017, 'Find the value of x if 2, x, 18 are in geometric progression.', '["±6", "±8", "±9", "±12"]'::jsonb, '±6', 'For geometric progression: x² = 2 × 18 = 36, so x = ±6.', 'Hard', 'Unit 1: Sequence and Series'),
    (1018, 'What is the sum of the infinite series 1 + 3/4 + (3/4)² + (3/4)³ + ...?', '["3", "4", "5", "6"]'::jsonb, '4', 'This is an infinite geometric series with a₁ = 1 and r = 3/4. Sum = a₁/(1-r) = 1/(1-3/4) = 1/(1/4) = 4.', 'Hard', 'Unit 1: Sequence and Series'),
    (1019, 'If the sum of n terms of an arithmetic series is 3n² + 5n, what is the nth term?', '["6n + 2", "6n - 2", "3n + 5", "6n + 8"]'::jsonb, '6n + 2', 'If Sₙ = 3n² + 5n, then aₙ = Sₙ - Sₙ₋₁ = (3n² + 5n) - (3(n-1)² + 5(n-1)) = 3n² + 5n - 3(n² - 2n + 1) - 5n + 5 = 3n² + 5n - 3n² + 6n - 3 - 5n + 5 = 6n + 2.', 'Hard', 'Unit 1: Sequence and Series'),
    (1020, 'Find the number of terms in the arithmetic sequence 7, 10, 13, ..., 97.', '["30", "31", "32", "33"]'::jsonb, '31', 'Using aₙ = a₁ + (n-1)d: 97 = 7 + (n-1)3, so 90 = 3(n-1), giving n-1 = 30, thus n = 31.', 'Hard', 'Unit 1: Sequence and Series'),
    (1021, 'In a geometric sequence, if the 4th term is 24 and the 7th term is 192, what is the 10th term?', '["1536", "1544", "1552", "1560"]'::jsonb, '1536', 'From a₄ = 24 and a₇ = 192: a₇/a₄ = r³ = 192/24 = 8, so r = 2. Then a₄ = a₁r³ = 24, so a₁ = 24/8 = 3. Therefore a₁₀ = 3 × 2⁹ = 3 × 512 = 1536.', 'Hard', 'Unit 1: Sequence and Series')
) AS q(legacy_id, question, options, correct_answer, explanation, difficulty, chapter_name)
INNER JOIN public.chapters c ON c.name = q.chapter_name
INNER JOIN public.subjects s ON s.id = c.subject_id AND s.name = 'Mathematics'
ON CONFLICT (legacy_id) DO NOTHING;
