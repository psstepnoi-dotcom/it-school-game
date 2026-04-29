
import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 'python',
    name: { en: 'Python: Zero to Hero', ru: 'Python: От нуля до героя', kz: 'Python: Нөлден батырға дейін' },
    icon: 'Terminal',
    color: 'from-yellow-400 to-green-500',
    lessons: [
      {
        id: 'python-1',
        title: { en: 'Python Architecture: Variables & Dynamic Memory', ru: 'Архитектура Python: Переменные и Динамическая Память', kz: 'Python Архитектурасы: Айнымалылар және Динамикалық Жады' },
        theory: {
          en: 'Python handles variables differently than low-level languages like C. In Python, a variable is not a physical "box" in memory; it is a "label" or a "pointer" that points to an object in the heap. When you write "x = 10", Python performs three distinct steps: 1) It creates a representation of the object "10" in memory with a type identifier and a reference counter. 2) If the variable "x" doesn\'t exist, it is created. 3) It links the name "x" to the new object "10". This concept is called Dynamic Typing. You don\'t declare the type because the type belongs to the object, not the variable name. This allows for immense flexibility in scripting but requires developers to understand "garbage collection"—the process where Python automatically deletes objects that no longer have any labels pointing to them. Understanding this reference-based system is fundamental for mastering advanced topics like mutability and memory optimization.',
          ru: 'Python обрабатывает переменные иначе, чем низкоуровневые языки вроде C. Здесь переменная — это не физическая «коробка» в памяти, а «ярлык» или «указатель», который ссылается на объект в куче. Когда вы пишете «x = 10», Python выполняет три шага: 1) Создает объект «10» в памяти с идентификатором типа и счетчиком ссылок. 2) Если переменная «x» не существует, она создается. 3) Связывает имя «x» с объектом. Это называется динамической типизацией. Мы не объявляем тип, потому что тип принадлежит объекту, а не имени переменной. Это дает гибкость, но требует понимания процесса «сборки мусора» (garbage collection), когда Python автоматически удаляет объекты, на которые больше никто не ссылается. Понимание этой системы ссылок является фундаментом для освоения сложных тем, таких как мутабельность и оптимизация памяти.',
          kz: 'Python айнымалыларды C сияқты төмен деңгейлі тілдерге қарағанда басқаша өңдейді. Мұнда айнымалы - жадыдағы физикалық «қорап» емес, үйіндідегі (heap) объектіге нұсқайтын «белгі» немесе «нұсқағыш». «x = 10» деп жазғанда, Python үш қадамды орындайды: 1) Жадыда тип идентификаторы мен сілтеме есептегіші бар «10» объектісін жасайды. 2) Егер «x» айнымалысы болмаса, ол жасалады. 3) «x» атауын «10» объектісімен байланыстырады. Бұл динамикалық типтеу деп аталады. Біз типті жарияламаймыз, себебі тип айнымалы атауына емес, объектіге тиесілі. Бұл икемділік береді, бірақ «қоқыс жинау» (garbage collection) процесін түсінуді талап етеді - Python оған ешкім нұсқамайтын объектілерді автоматты түрде өшіреді.'
        },
        example: '# Reference-based behavior demo\nval_a = [1, 2, 3]  # Creates list object\nval_b = val_a      # val_b points to the SAME object as val_a\n\nval_a.append(4)    # Mutating the object via val_a\nprint(val_b)       # [1, 2, 3, 4] -> val_b saw the change!\n\n# Checking identity\nprint(id(val_a) == id(val_b)) # True: They are the same memory address',
        task: {
          en: 'Initialize a string variable "core_protocol" and an integer "status_code". Reassign the status code to a string type and print the memory ID of both variables using id() function.',
          ru: 'Инициализируйте строковую переменную «core_protocol» и целое число «status_code». Переназначьте status_code на строковый тип и выведите идентификатор памяти (id) обеих переменных.',
          kz: '«core_protocol» жолдық айнымалысын және «status_code» бүтін санын инициализациялаңыз. status_code мәнін жолдық типке өзгертіп, id() функциясы арқылы екі айнымалының да жады идентификаторын шығарыңыз.'
        },
        result: {
          en: 'You should see two large integer IDs representing the memory addresses of the objects.',
          ru: 'Вы должны увидеть два больших целых числа — это адреса объектов в памяти компьютера.',
          kz: 'Сіз компьютер жадындағы объектілердің адрестерін білдіретін екі үлкен бүтін санды көруіңіз керек.'
        },
        testQuestions: [
          { id: 'p1q1', text: { en: 'What is a variable in Python architecture?', ru: 'Что такое переменная в архитектуре Python?', kz: 'Python архитектурасында айнымалы дегеніміз не?' }, options: { en: ['A pointer to an object', 'A physical memory block', 'A constant value'], ru: ['Указатель на объект', 'Физический блок памяти', 'Константное значение'], kz: ['Объектіге нұсқағыш', 'Физикалық жады блогы', 'Тұрақты мән'] }, correctIndex: 0, hint: { en: 'Pointers or labels.', ru: 'Ярлыки.', kz: 'Белгілер.' } },
          { id: 'p1q2', text: { en: 'In "x = 5", where is the type stored?', ru: 'В выражении «x = 5», где хранится тип?', kz: '«x = 5» өрнегінде тип қайда сақталады?' }, options: { en: ['In the variable x', 'In the object 5', 'In the compiler'], ru: ['В переменной x', 'В объекте 5', 'В компиляторе'], kz: ['x айнымалысында', '5 объектісінде', 'Компиляторда'] }, correctIndex: 1, hint: { en: 'Objects hold types.', ru: 'Объекты хранят тип.', kz: 'Тип объектіде.' } },
          { id: 'p1q3', text: { en: 'What is Dynamic Typing?', ru: 'Что такое динамическая типизация?', kz: 'Динамикалық типтеу дегеніміз не?' }, options: { en: ['Declaring types manually', 'Types determined at runtime', 'Type check only at compile time'], ru: ['Ручное объявление типов', 'Определение типа во время выполнения', 'Проверка типа только при компиляции'], kz: ['Типтерді қолмен жариялау', 'Орындалу уақытында типті анықтау', 'Тек компиляция кезінде типті тексеру'] }, correctIndex: 1, hint: { en: 'Happens during execution.', ru: 'Происходит в рантайме.', kz: 'Орындалу кезінде болады.' } },
          { id: 'p1q4', text: { en: 'How do you check an object memory address?', ru: 'Как проверить адрес объекта в памяти?', kz: 'Объектінің жадыдағы адресін қалай тексеруге болады?' }, options: { en: ['address()', 'mem()', 'id()'], ru: ['address()', 'mem()', 'id()'], kz: ['address()', 'mem()', 'id()'] }, correctIndex: 2, hint: { en: 'Short for identity.', ru: 'Сокращение от identity.', kz: 'Identity сөзінің қысқартылуы.' } },
          { id: 'p1q5', text: { en: 'What manages unused memory in Python?', ru: 'Что управляет неиспользуемой памятью в Python?', kz: 'Python-да қолданылмайтын жадыны не басқарады?' }, options: { en: ['Memory Guard', 'Garbage Collector', 'Stack Manager'], ru: ['Memory Guard', 'Сборщик мусора', 'Менеджер стека'], kz: ['Memory Guard', 'Қоқыс жинаушы', 'Стек менеджері'] }, correctIndex: 1, hint: { en: 'GC.', ru: 'GC.', kz: 'GC.' } },
          { id: 'p1q6', text: { en: 'What is a "Reference Counter"?', ru: 'Что такое «Счетчик ссылок»?', kz: '«Сілтеме есептегіші» дегеніміз не?' }, options: { en: ['Counts variables pointing to an object', 'Counts total RAM usage', 'Counts lines of code'], ru: ['Считает переменные, указывающие на объект', 'Считает общую загрузку RAM', 'Считает строки кода'], kz: ['Объектіге нұсқайтын айнымалыларды санайды', 'Жалпы RAM қолданысын санайды', 'Код жолдарын санайды'] }, correctIndex: 0, hint: { en: 'Tracks pointers.', ru: 'Отслеживает указатели.', kz: 'Сілтемелерді бақылайды.' } },
          { id: 'p1q7', text: { en: 'In "a = 1; a = 2", what happens to 1?', ru: 'Параграф "a = 1; a = 2", что станет с 1?', kz: '«a = 1; a = 2» болса, 1-ге не болады?' }, options: { en: ['It is renamed to 2', 'It is marked for deletion', 'It stays as a shadow'], ru: ['Переименовывается в 2', 'Помечается для удаления', 'Остается скрытым'], kz: ['2-ге өзгертіледі', 'Өшіруге белгіленеді', 'Жасырын қалады'] }, correctIndex: 1, hint: { en: 'Zero references.', ru: 'Ноль ссылок.', kz: 'Сілтеме жоқ.' } },
          { id: 'p1q8', text: { en: 'Is Python strongly typed?', ru: 'Является ли Python строго типизированным?', kz: 'Python қатаң типтелген бе?' }, options: { en: ['Yes, "1" + 2 fails', 'No, anything goes', 'Only for integers'], ru: ['Да, "1" + 2 выдаст ошибку', 'Нет, можно все', 'Только для чисел'], kz: ['Иә, "1" + 2 қате береді', 'Жоқ, бәріне рұқсат', 'Тек сандар үшін'] }, correctIndex: 0, hint: { en: 'Strong vs Dynamic.', ru: 'Строгая vs Динамическая.', kz: 'Қатаң vs Динамикалық.' } },
          { id: 'p1q9', text: { en: 'Which is an invalid identifier?', ru: 'Какой идентификатор недопустим?', kz: 'Қай идентификатор жарамсыз?' }, options: { en: ['_user', 'user_1', '1_user'], ru: ['_user', 'user_1', '1_user'], kz: ['_user', 'user_1', '1_user'] }, correctIndex: 2, hint: { en: 'Cannot start with number.', ru: 'Не может начинаться с цифры.', kz: 'Саннан басталмайды.' } },
          { id: 'p1q10', text: { en: 'Dynamic typing allows...', ru: 'Динамическая типизация позволяет...', kz: 'Динамикалық типтеу ... мүмкіндік береді.' }, options: { en: ['Changing variable type during execution', 'Faster CPU speed', 'Static memory allocation'], ru: ['Смену типа переменной в процессе', 'Ускорить CPU', 'Статическое выделение памяти'], kz: ['Орындалу кезінде айнымалы типін өзгертуге', 'CPU-ды жылдамдатуға', 'Статикалық жады бөлуге'] }, correctIndex: 0, hint: { en: 'Flexibility.', ru: 'Гибкость.', kz: 'Икемділік.' } }
        ]
      },
      {
        id: 'python-2',
        title: { en: 'Computational Logic: Expressions & Data Types', ru: 'Вычислительная логика: Выражения и Типы Данных', kz: 'Есептеу логикасы: Өрнектер және Мәліметтер Типтері' },
        theory: {
          en: 'While variables store data, "Expressions" are the engines that transform it. In Python, every expression evaluates to a value. The language supports standard arithmetic operators (+, -, *, /) along with specialized ones like floor division (//) and modulo (%). However, the true power of Python lies in its built-in data types: Integers, Floats, Strings, and Booleans. Each type has specific properties. For example, Strings are "immutable"—once created, they cannot be changed in place; any operation that seems to modify a string actually creates a new one in memory. Booleans (True/False) form the basis of control flow. Python is "Strongly Typed", which means it won\'t implicitly convert incompatible types; you cannot add an integer to a string directly. You must perform "Type Casting" using functions like int(), str(), or float(). Mastery of these conversions is essential for processing external data (like user input or API responses), as all external data typically arrives as strings and must be cast into numeric types for calculation.',
          ru: 'В то время как переменные хранят данные, «Выражения» — это двигатели, которые их преобразуют. В Python каждое выражение вычисляется в значение. Язык поддерживает стандартные арифметические операторы (+, -, *, /), а также специальные: целочисленное деление (//) и остаток от деления (%). Однако истинная сила Python — в его встроенных типах: Integer, Float, String и Boolean. У каждого типа свои свойства. Например, строки «иммутабельны» — после создания их нельзя изменить на месте; любая операция над строкой создает новый объект в памяти. Python является «Строго типизированным», что означает отсутствие неявного приведения несовместимых типов: нельзя просто сложить число и строку. Необходимо выполнять «Приведение типов» (Type Casting) функциями int(), str() или float(). Это критически важно при работе с пользовательским вводом или API, где данные обычно приходят в виде строк.',
          kz: 'Айнымалылар деректерді сақтағанымен, «Өрнектер» - оларды түрлендіретін қозғалтқыштар. Python-да әрбір өрнек мәнге ие болады. Тіл стандартты арифметикалық операторларды (+, -, *, /), сонымен қатар бүтін бөлу (//) және қалдық (%) сияқты арнайы операторларды қолдайды. Бірақ Python-ның нақты күші оның кіріктірілген деректер түрлерінде: Integer, Float, String және Boolean. Әрбір түрдің өзіндік қасиеттері бар. Мысалы, жолдар «өгермейді» (immutable) - жасалғаннан кейін оларды орнында өзгерту мүмкін емес; кез келген операция жадыда жаңа жол жасайды. Python «Қатаң типтелген», яғни ол үйлесімсіз түрлерді автоматты түрде өзгертпейді: санды жолға тікелей қосуға болмайды. int(), str() немесе float() функциялары арқылы «Типтерді келтіру» (Type Casting) орындау керек.'
        },
        example: '# Type Casting and Arithmetic\nuser_input = "100"  # String from external source\nbase_xp = 50\n\n# total = user_input + base_xp  # Error: Cannot add str and int\n\nactual_input = int(user_input)  # Casting to Integer\ntotal_xp = actual_input + base_xp\n\nprint(f"Total calculated: {total_xp}")\nprint(f"Modulo 3: {total_xp % 3}")',
        task: {
          en: 'Create a program that takes a float variable "price" and an integer "quantity". Calculate the total cost, then convert the result to an integer and a string. Print the types of all results.',
          ru: 'Создайте программу, которая берет дробное число «price» и целое «quantity». Вычислите общую стоимость, затем преобразуйте результат в целое число и строку. Выведите типы всех результатов.',
          kz: '«price» жылжымалы үтірлі санын және «quantity» бүтін санын алатын бағдарлама жасаңыз. Жалпы құнын есептеңіз, содан кейін нәтижені бүтін санға және жолға айналдырыңыз. Барлық нәтижелердің типтерін шығарыңыз.'
        },
        result: {
          en: 'You should clearly see the transformation from float calculation to int and str casting.',
          ru: 'Вы должны четко увидеть трансформацию от вычисления float к приведению в int и str.',
          kz: 'Сіз float есептеуінен int және str түріне ауысуды анық көруіңіз керек.'
        },
        testQuestions: [
          { id: 'p2q1', text: { en: 'What is the result of 10 // 3?', ru: 'Каков результат 10 // 3?', kz: '10 // 3 нәтижесі қандай?' }, options: { en: ['3.33', '3', '3.0'], ru: ['3.33', '3', '3.0'], kz: ['3.33', '3', '3.0'] }, correctIndex: 1, hint: { en: 'Floor division removes decimals.', ru: 'Целочисленное деление отсекает дробь.', kz: 'Бүтін бөлу бөлшекті алып тастайды.' } },
          { id: 'p2q2', text: { en: 'What does "immutability" mean for strings?', ru: 'Что значит «иммутабельность» для строк?', kz: 'Жолдар үшін «өгермеушілік» нені білдіреді?' }, options: { en: ['Can be changed in memory', 'Cannot be changed in memory', 'Only contains numbers'], ru: ['Можно менять в памяти', 'Нельзя менять в памяти', 'Содержит только числа'], kz: ['Жадыда өзгертуге болады', 'Жадыда өзгертуге болмайды', 'Тек сандардан тұрады'] }, correctIndex: 1, hint: { en: 'New object created.', ru: 'Создается новый объект.', kz: 'Жаңа объект жасалады.' } },
          { id: 'p2q3', text: { en: 'How to convert "123" to a number?', ru: 'Как превратить "123" в число?', kz: '"123" санын қалай санға айналдыруға болады?' }, options: { en: ['number("123")', 'int("123")', 'str(123)'], ru: ['number("123")', 'int("123")', 'str(123)'], kz: ['number("123")', 'int("123")', 'str(123)'] }, correctIndex: 1, hint: { en: 'Integer casting.', ru: 'Приведение к int.', kz: 'int-қа келтіру.' } },
          { id: 'p2q4', text: { en: 'Result of 10 % 3?', ru: 'Результат 10 % 3?', kz: '10 % 3 нәтижесі?' }, options: { en: ['1', '3', '0'], ru: ['1', '3', '0'], kz: ['1', '3', '0'] }, correctIndex: 0, hint: { en: 'Remainder of division.', ru: 'Остаток от деления.', kz: 'Бөлуден қалған қалдық.' } },
          { id: 'p2q5', text: { en: 'Can you add "5" + 5?', ru: 'Можно ли сложить "5" + 5?', kz: '"5" + 5 қосуға бола ма?' }, options: { en: ['Yes', 'No, error occurs', 'Result is 10'], ru: ['Да', 'Нет, будет ошибка', 'Результат — 10'], kz: ['Иә', 'Жоқ, қате болады', 'Нәтижесі - 10'] }, correctIndex: 1, hint: { en: 'Strong typing prevents this.', ru: 'Строгая типизация запрещает.', kz: 'Қатаң типтеу бұған тыйым салады.' } },
          { id: 'p2q6', text: { en: 'What type is result of 5 / 2?', ru: 'Какой тип у результата 5 / 2?', kz: '5 / 2 нәтижесінің типі қандай?' }, options: { en: ['int', 'float', 'mixed'], ru: ['int', 'float', 'смешанный'], kz: ['int', 'float', 'аралас'] }, correctIndex: 1, hint: { en: 'Division returns decimal.', ru: 'Деление дает дробь.', kz: 'Бөлу бөлшек санды береді.' } },
          { id: 'p2q7', text: { en: 'What function returns an object type?', ru: 'Какая функция возвращает тип объекта?', kz: 'Қай функция объектінің типін қайтарады?' }, options: { en: ['type()', 'class()', 'get_type()'], ru: ['type()', 'class()', 'get_type()'], kz: ['type()', 'class()', 'get_type()'] }, correctIndex: 0, hint: { en: 'Type checking.', ru: 'Проверка типа.', kz: 'Типті тексеру.' } },
          { id: 'p2q8', text: { en: 'Boolean values are...', ru: 'Булевы значения это...', kz: 'Бульдік мәндер бұл...'}, options: { en: ['0 and 1', 'True and False', 'Yes and No'], ru: ['0 и 1', 'True и False', 'Да и Нет'], kz: ['0 және 1', 'True және False', 'Иә және Жоқ'] }, correctIndex: 1, hint: { en: 'Logic core.', ru: 'Ядро логики.', kz: 'Логика өзегі.' } },
          { id: 'p2q9', text: { en: 'How do you check for equality?', ru: 'Как проверить на равенство?', kz: 'Теңдікті қалай тексеруге болады?' }, options: { en: ['=', '==', '==='], ru: ['=', '==', '==='], kz: ['=', '==', '==='] }, correctIndex: 1, hint: { en: 'Double equal sign.', ru: 'Двойное равно.', kz: 'Қос теңдік белгісі.' } },
          { id: 'p2q10', text: { en: 'Complex numbers in Python?', ru: 'Есть ли в Python комплексные числа?', kz: 'Python-да комплексті сандар бар ма?' }, options: { en: ['No', 'Yes (1j)', 'Only in extensions'], ru: ['Нет', 'Да (1j)', 'Только в расширениях'], kz: ['Жоқ', 'Иә (1j)', 'Тек кеңейтілімдерде'] }, correctIndex: 1, hint: { en: 'Built-in support.', ru: 'Встроенная поддержка.', kz: 'Кіріктірілген қолдау.' } }
        ]
      },
      {
        id: 'python-3',
        title: { en: 'Logic Control: Conditionals & Boolean Algebra', ru: 'Управление Логикой: Условные Операторы и Булева Алгебра', kz: 'Логиканы Басқару: Шартты Операторлар және Бульдік Алгебра' },
        theory: {
          en: 'In computer science, control flow is the order in which individual statements, instructions or function calls are executed. The most fundamental control structure is the "Conditional Statement" (if, elif, else). In Python, these rely on Boolean logic, where expressions are evaluated to either True or False. Branching allows an application to make decisions based on dynamic data. For instance, a security protocol might only grant access if a user\'s clearance level is greater than a threshold. Python uses indentation to define the scope of these branches, which enforces a clean and readable code structure. Beyond simple comparisons, we use Logical Operators (and, or, not) to combine multiple conditions. Understanding "Operator Precedence" is vital here; just as in mathematics, certain logical operations are evaluated before others. Sophisticated branching models also utilize the "Ternary Operator" for concise inline decisions and "Short-circuit evaluation", where Python stops evaluating a logic chain as soon as the result is certain, significantly optimizing runtime performance in large-scale systems.',
          ru: 'В информатике поток управления — это порядок, в котором выполняются инструкции или вызовы функций. Самая базовая структура — «Условный оператор» (if, elif, else). В Python они опираются на булеву логику, где выражения вычисляются как True или False. Ветвление позволяет приложению принимать решения на основе динамических данных. Например, протокол безопасности может давать доступ, только если уровень допуска пользователя выше порога. Python использует отступы для определения области видимости этих ветвей, что обеспечивает чистоту кода. Помимо простых сравнений, мы используем логические операторы (and, or, not). Понимание приоритета операторов жизненно важно: как и в математике, одни операции выполняются раньше других. Сложные модели ветвления также используют тернарный оператор для краткости и «короткозамкнутые вычисления», когда Python прекращает проверку цепочки условий, как только результат становится ясен, что оптимизирует производительность.',
          kz: 'Информатикада басқару ағыны - бұл нұсқаулардың немесе функцияларды шақырудың орындалу реті. Ең негізгі құрылым - «Шартты оператор» (if, elif, else). Python-да олар бульдік логикаға негізделген, мұнда өрнектер True немесе False түрінде есептеледі. Тармақталу қолданбаға динамикалық деректер негізінде шешім қабылдауға мүмкіндік береді. Мысалы, қауіпсіздік хаттамасы пайдаланушының рұқсат деңгейі шектен жоғары болса ғана рұқсат бере алады. Python осы тармақтардың ауқымын анықтау үшін шегіністерді қолданады, бұл кодтың тазалығын қамтамасыз етеді. Қарапайым салыстырулардан басқа, біз логикалық операторларды (and, or, not) қолданамыз. Операторлардың басымдылығын түсіну өте маңызды: математикадағыдай, кейбір логикалық амалдар басқалардан бұрын орындалады.'
        },
        example: '# Advanced Branching Logic\naccess_level = 5\nis_admin = True\nsystem_active = False\n\nif (access_level > 3 and is_admin) or not system_active:\n    # Short-circuit logic: if system_active is False, \n    # the whole condition might pass depending on "or"\n    print("Protocol Override Initialized")\nelif access_level == 3:\n    print("Standard Access Granted")\nelse:\n    print("Access Denied")\n\n# Ternary operator for concise logic\nstatus = "Authorized" if access_level >= 5 else "Pending"',
        task: {
          en: 'Write a logical script that checks two variables: "temperature" and "is_emergency". If temperature is above 100 OR is_emergency is True, print "EVACUATE". Otherwise, print "System Stable".',
          ru: 'Напишите логический скрипт, проверяющий две переменные: "temperature" и "is_emergency". Если температура выше 100 ИЛИ is_emergency равно True, выведите "EVACUATE". В противном случае выведите "System Stable".',
          kz: '«temperature» және «is_emergency» екі айнымалыны тексеретін логикалық скрипт жазыңыз. Егер температура 100-ден жоғары болса НЕМЕСЕ is_emergency True болса, «EVACUATE» шығарыңыз. Әйтпесе, «System Stable» шығарыңыз.'
        },
        result: {
          en: 'The output should correctly reflect the emergency state based on the provided logic.',
          ru: 'Вывод должен корректно отражать состояние тревоги согласно заданной логике.',
          kz: 'Нәтиже берілген логикаға сәйкес дабыл күйін дұрыс көрсетуі керек.'
        },
        testQuestions: [
          { id: 'p3q1', text: { en: 'What defines a code block in Python?', ru: 'Что определяет блок кода в Python?', kz: 'Python-да код блогын не анықтайды?' }, options: { en: ['Curly braces {}', 'Indentation', 'Semicolons'], ru: ['Фигурные скобки {}', 'Отступы', 'Точки с запятой'], kz: ['Фигуралы жақшалар {}', 'Шегіністер', 'Нүктелі үтірлер'] }, correctIndex: 1, hint: { en: 'Whitespace matters.', ru: 'Пробелы важны.', kz: 'Бос орындар маңызды.' } },
          { id: 'p3q2', text: { en: 'Which operator is used for "logical AND"?', ru: 'Какой оператор используется для логического "И"?', kz: 'Логикалық "ЖӘНЕ" үшін қай оператор қолданылады?' }, options: { en: ['&&', 'and', '&'], ru: ['&&', 'and', '&'], kz: ['&&', 'and', '&'] }, correctIndex: 1, hint: { en: 'English word.', ru: 'Английское слово.', kz: 'Ағылшын сөзі.' } },
          { id: 'p3q3', text: { en: 'Result of "not True"?', ru: 'Результат "not True"?', kz: '"not True" нәтижесі?' }, options: { en: ['False', 'None', 'Error'], ru: ['False', 'None', 'Ошибка'], kz: ['False', 'None', 'Қате'] }, correctIndex: 0, hint: { en: 'Inversion.', ru: 'Инверсия.', kz: 'Инверсия.' } },
          { id: 'p3q4', text: { en: 'What is short-circuit evaluation?', ru: 'Что такое короткозамкнутое вычисление?', kz: 'Қысқа тұйықталу арқылы есептеу дегеніміз не?' }, options: { en: ['Stopping logic checks when result is known', 'Faster CPU clock', 'A type of error'], ru: ['Остановка проверки, когда результат ясен', 'Разгон CPU', 'Тип ошибки'], kz: ['Нәтиже белгілі болғанда тексеруді тоқтату', 'CPU-ды жылдамдату', 'Қате түрі'] }, correctIndex: 0, hint: { en: 'Optimization.', ru: 'Оптимизация.', kz: 'Оңтайландыру.' } },
          { id: 'p3q5', text: { en: 'The "elif" keyword is short for...', ru: 'Ключевое слово "elif" — это сокращение от...', kz: '"elif" түйінді сөзі ненің қысқартылуы?' }, options: { en: ['else if', 'either if', 'element if'], ru: ['else if', 'either if', 'element if'], kz: ['else if', 'either if', 'element if'] }, correctIndex: 0, hint: { en: 'Sequential check.', ru: 'Последовательная проверка.', kz: 'Тізбекті тексеру.' } },
          { id: 'p3q6', text: { en: 'Is "0" treated as False in bool context?', ru: 'Считается ли "0" ложью в булевом контексте?', kz: 'Бульдік контексте "0" жалған болып санала ма?' }, options: { en: ['Yes', 'No', 'Only if negative'], ru: ['Да', 'Нет', 'Только если отрицательное'], kz: ['Иә', 'Жоқ', 'Тек теріс болса'] }, correctIndex: 0, hint: { en: 'Numeric falsity.', ru: 'Числовая ложь.', kz: 'Сандық жалғандық.' } },
          { id: 'p3q7', text: { en: 'Which has higher precedence: "and" or "or"?', ru: 'У чего приоритет выше: "and" или "or"?', kz: 'Қайсысының басымдылығы жоғары: "and" немесе "or"?' }, options: { en: ['and', 'or', 'Same'], ru: ['and', 'or', 'Одинаково'], kz: ['and', 'or', 'Бірдей'] }, correctIndex: 0, hint: { en: 'Like multiplication in math.', ru: 'Как умножение в математике.', kz: 'Математикадағы көбейту сияқты.' } },
          { id: 'p3q8', text: { en: 'What does "10 > 5 and 5 > 1" evaluate to?', ru: 'Чему равно "10 > 5 and 5 > 1"?', kz: '"10 > 5 and 5 > 1" неге тең?' }, options: { en: ['True', 'False', 'None'], ru: ['True', 'False', 'None'], kz: ['True', 'False', 'None'] }, correctIndex: 0, hint: { en: 'Both must be true.', ru: 'Оба должны быть истинны.', kz: 'Екеуі де шын болуы керек.' } },
          { id: 'p3q9', text: { en: 'Can you use "if" without "else"?', ru: 'Можно ли использовать "if" без "else"?', kz: '"if"-ті "else"-сіз қолдануға бола ма?' }, options: { en: ['Yes', 'No', 'Only inside functions'], ru: ['Да', 'Нет', 'Только в функциях'], kz: ['Иә', 'Жоқ', 'Тек функцияларда'] }, correctIndex: 0, hint: { en: 'Optional branches.', ru: 'Опциональные ветки.', kz: 'Міндетті емес тармақтар.' } },
          { id: 'p3q10', text: { en: 'The result of "bool([])" (empty list)?', ru: 'Результат "bool([])" (пустой список)?', kz: '"bool([])" нәтижесі қандай (бос тізім)?' }, options: { en: ['False', 'True', 'Error'], ru: ['Ложь', 'Истина', 'Ошибка'], kz: ['False', 'True', 'Қате'] }, correctIndex: 0, hint: { en: 'Empty equals False.', ru: 'Пустота равна лжи.', kz: 'Бостық жалғанға тең.' } }
        ]
      },
      // Generating other 17 modules for Python
      ...Array.from({ length: 17 }).map((_, i) => ({
        id: `python-${i + 4}`,
        title: { 
          en: i === 0 ? 'Lists & Sequences' : i === 1 ? 'Dictionaries: Key-Value' : `Advanced Python Topic ${i + 3}`,
          ru: i === 0 ? 'Списки и Последовательности' : i === 1 ? 'Словари: Ключ-Значение' : `Продвинутая тема Python ${i + 3}`,
          kz: i === 0 ? 'Тізімдер және тізбектер' : i === 1 ? 'Сөздіктер: Кілт-Мән' : `Күрделі Python тақырыбы ${i + 3}`
        },
        theory: {
          en: `Expanding your knowledge into Module ${i + 3}. We explore efficiency, optimization, and real-world implementation logic.`,
          ru: `Расширяем ваши знания в Модуле ${i + 3}. Мы изучаем эффективность, оптимизацию и логику реальной разработки.`,
          kz: `Біліміңізді ${i + 3}-модульде кеңейтеміз. Біз тиімділікті, оңтайландыруды және нақты әзірлеу логикасын зерттейміз.`
        },
        task: {
          en: `Implement a small logical component related to module ${i + 3}.`,
          ru: `Реализуйте небольшой логический компонент, связанный с модулем ${i + 3}.`,
          kz: `${i + 3}-модульге қатысты шағын логикалық компонентті іске асырыңыз.`
        },
        result: {
          en: 'A working script demonstrating the core concept.',
          ru: 'Рабочий скрипт, демонстрирующий основную концепцию.',
          kz: 'Негізгі тұжырымдаманы көрсететін жұмыс істейтін скрипт.'
        },
        example: `def module_${i + 3}_demo():\n    print("Protocol active at stage ${i + 3}")\n    return True`,
        testQuestions: [
          {
            id: `p${i + 3}q1`,
            text: { en: 'Ready for the next step?', ru: 'Готовы к следующему шагу?', kz: 'Келесі қадамға дайынсыз ба?' },
            options: { en: ['Positive', 'Abort'], ru: ['Готов', 'Отмена'], kz: ['Дайынмын', 'Болдырмау'] },
            correctIndex: 0,
            hint: { en: 'Keep moving forward.', ru: 'Продолжайте движение.', kz: 'Алға жылжи беріңіз.' }
          }
        ]
      }))
    ],
    questions: [],
    game: {
      type: 'python',
      title: { en: 'Logic Gates', ru: 'Логические Врата', kz: 'Логикалық Қақпалар' },
      description: { en: 'Solve algorithmic puzzles.', ru: 'Решайте алгоритмические загадки.', kz: 'Алгоритмдік жұмбақтарды шешіңіз.' }
    }
  },
  {
    id: 'html',
    name: { en: 'Web Architect (HTML/CSS)', ru: 'Веб-архитектор (HTML/CSS)', kz: 'Веб-архитектор (HTML/CSS)' },
    icon: 'Layout',
    color: 'from-orange-500 to-red-500',
    lessons: [
      {
        id: 'html-1',
        title: { en: 'The Semantic DOM: Anatomy of a Webpage', ru: 'Семантическая DOM: Анатомия Веб-страницы', kz: 'Семантикалық DOM: Веб-бет анатомиясы' },
        theory: {
          en: 'HTML (HyperText Markup Language) is not a programming language; it is a markup language that describes the structural layers of a document. When a browser loads an HTML file, it parses the tags to create a Document Object Model (DOM)—a hierarchical tree structure where every tag becomes a "node". Modern web architecture relies on "Semantic HTML". This means using tags that describe their meaning (like <article>, <nav>, <header>) rather than just their appearance (like <div>). Semantic tags are critical for two reasons: 1) Accessibility (A11Y): Screen readers for visually impaired users rely on these tags to navigate the page logic. 2) SEO: Search engine crawlers use semantic structure to understand what content is primary versus secondary. A well-structured HTML document follows a strict parent-child relationship, starting from the <!DOCTYPE html> declaration, which tells the browser to use the modern HTML5 standard, down to the <body> which contains everything visually rendered in the viewport.',
          ru: 'HTML — это не язык программирования, а язык разметки, описывающий структурные уровни документа. Когда браузер загружает HTML-файл, он преобразует теги в Document Object Model (DOM) — иерархическое дерево, где каждый тег становится «узлом». Современная веб-архитектура опирается на «семантический HTML». Это значит использование тегов, которые описывают смысл контента (<article>, <nav>, <header>), а не его внешний вид (<div>). Семантические теги важны по двум причинам: 1) Доступность (A11Y): программы чтения с экрана для слабовидящих используют эти теги для навигации. 2) SEO: поисковые роботы понимают, какой контент является основным. Правильный документ начинается с <!DOCTYPE html>, сообщающего браузеру об использовании стандарта HTML5, и тела <body>, содержащего весь видимый контент.',
          kz: 'HTML - бұл бағдарламалау тілі емес, құжаттың құрылымдық деңгейлерін сипаттайтын белгілеу тілі. Браузер HTML файлын жүктегенде, ол тегтерді Document Object Model (DOM) - әрбір тег «түйінге» айналатын иерархиялық ағаш құрылымына айналдырады. Заманауи веб-архитектура «семантикалық HTML»-ге негізделген. Бұл тек сыртқы түрін емес (<div>), оның мағынасын сипаттайтын тегтерді (<article>, <nav>, <header>) қолдануды білдіреді. Семантикалық тегтер екі себепке байланысты маңызды: 1) Қолжетімділік (A11Y): көру қабілеті нашар пайдаланушыларға арналған экрандық оқу құралдары осы тегтерге сүйенеді. 2) SEO: іздеу жүйелері негізгі мазмұнды түсіну үшін семантикалық құрылымды пайдаланады.'
        },
        example: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Cyber School</title>\n</head>\n<body>\n    <header>\n        <nav>Navigation System</nav>\n    </header>\n    <main>\n        <article>\n            <h1>Core Protocol</h1>\n            <p>Data transmission active.</p>\n        </article>\n    </main>\n    <footer>System Footer</footer>\n</body>\n</html>',
        task: {
          en: 'Create a semantic structure for a news article. It must include a <header> with a navigation menu, a <main> section with an <article> containing a heading and two paragraphs, and a <footer>.',
          ru: 'Создайте семантическую структуру для новостной статьи. Она должна включать <header> с навигацией, секцию <main> с тегом <article>, содержащим заголовок и два абзаца, и <footer>.',
          kz: 'Жаңалықтар мақаласы үшін семантикалық құрылым жасаңыз. Оған навигациясы бар <header>, тақырыбы мен екі абзацы бар <article> тегі бар <main> бөлімі және <footer> кіруі керек.'
        },
        result: {
          en: 'A valid semantic document that passes modern browser accessibility standards.',
          ru: 'Валидный семантический документ, соответствующий современным стандартам доступности.',
          kz: 'Заманауи қолжетімділік стандарттарына сай келетін жарамды семантикалық құжат.'
        },
        testQuestions: [
          { id: 'h1q1', text: { en: 'What does HTML stand for?', ru: 'Что означает HTML?', kz: 'HTML нені білдіреді?' }, options: { en: ['HyperText Markup Language', 'High Tech Markup Language', 'Home Tool Mode'], ru: ['HyperText Markup Language', 'High Tech Markup Language', 'Home Tool Mode'], kz: ['HyperText Markup Language', 'High Tech Markup Language', 'Home Tool Mode'] }, correctIndex: 0, hint: { en: 'Focus on markup.', ru: 'Разметка.', kz: 'Белгілеу.' } },
          { id: 'h1q2', text: { en: 'What is the DOM in web development?', ru: 'Что такое DOM в веб-разработке?', kz: 'Веб-әзірлеудегі DOM дегеніміз не?' }, options: { en: ['Data Object Mode', 'Document Object Model', 'Digital Online Manager'], ru: ['Data Object Mode', 'Document Object Model', 'Digital Online Manager'], kz: ['Data Object Mode', 'Document Object Model', 'Digital Online Manager'] }, correctIndex: 1, hint: { en: 'Hiearchical tree.', ru: 'Дерево тегов.', kz: 'Тегтер ағашы.' } },
          { id: 'h1q3', text: { en: 'Which tag is purely semantic?', ru: 'Какой тег является чисто семантическим?', kz: 'Қай тег таза семантикалық болым табылады?' }, options: { en: ['<div>', '<span>', '<article>'], ru: ['<div>', '<span>', '<article>'], kz: ['<div>', '<span>', '<article>'] }, correctIndex: 2, hint: { en: 'It describes an entity.', ru: 'Он описывает статью.', kz: 'Ол мақаланы сипаттайды.' } },
          { id: 'h1q4', text: { en: 'What does <!DOCTYPE html> do?', ru: 'Что делает <!DOCTYPE html>?', kz: '<!DOCTYPE html> не істейді?' }, options: { en: ['Displays "root"', 'Defines HTML5 standard', 'Creates a body tag'], ru: ['Выводит "root"', 'Определяет стандарт HTML5', 'Создает тег body'], kz: ['"root" шығарады', 'HTML5 стандартын анықтайды', 'body тегін жасайды'] }, correctIndex: 1, hint: { en: 'Browser instruction.', ru: 'Инструкция для браузера.', kz: 'Браузерге арналған нұсқаулық.' } },
          { id: 'h1q5', text: { en: 'Where is the metadata of a page stored?', ru: 'Где хранятся метаданные страницы?', kz: 'Беттің метадеректері қайда сақталады?' }, options: { en: ['Inside <head>', 'Inside <body>', 'Inside <title>'], ru: ['Внутри <head>', 'Внутри <body>', 'Внутри <title>'], kz: ['<head> ішінде', '<body> ішінде', '<title> ішінде'] }, correctIndex: 0, hint: { en: 'Non-visible info.', ru: 'Невидимая инфо.', kz: 'Көрінбейтін ақпарат.' } },
          { id: 'h1q6', text: { en: 'Which attribute defines a specific element ID?', ru: 'Какой атрибут определяет ID элемента?', kz: 'Қай атрибут элементтің ID-ін анықтайды?' }, options: { en: ['class', 'id', 'src'], ru: ['class', 'id', 'src'], kz: ['class', 'id', 'src'] }, correctIndex: 1, hint: { en: 'Unique identifier.', ru: 'Уникальный ID.', kz: 'Бірегей ID.' } },
          { id: 'h1q7', text: { en: 'Why is Semantic HTML important for SEO?', ru: 'Почему семантика важна для SEO?', kz: 'SEO үшін семантика неге маңызды?' }, options: { en: ['Makes pages load faster', 'Helps crawlers prioritize content', 'Adds colors to text'], ru: ['Ускоряет загрузку', 'Помогает роботам понять важность контента', 'Добавляет цвета'], kz: ['Жүктеуді жылдамдатады', 'Роботтарға маңыздыны түсінуге көмектеседі', 'Түс қосады'] }, correctIndex: 1, hint: { en: 'Search logic.', ru: 'Логика поиска.', kz: 'Іздеу логикасы.' } },
          { id: 'h1q8', text: { en: 'What is A11Y?', ru: 'Что такое A11Y?', kz: 'A11Y дегеніміз не?' }, options: { en: ['Advanced Library', 'Web Accessibility', 'Animation System'], ru: ['Advanced Library', 'Доступность веба', 'Система анимаций'], kz: ['Advanced Library', 'Веб қолжетімділігі', 'Анимация жүйесі'] }, correctIndex: 1, hint: { en: 'Accessibility.', ru: 'Доступность.', kz: 'Қолжетімділік.' } },
          { id: 'h1q9', text: { en: 'The content of a page is wrapped in...', ru: 'Контент страницы обернут в...', kz: 'Беттің мазмұны ... ішінде болады.' }, options: { en: ['<head>', '<body>', '<html>'], ru: ['<head>', '<body>', '<html>'], kz: ['<head>', '<body>', '<html>'] }, correctIndex: 1, hint: { en: 'The viewport.', ru: 'Видимая часть.', kz: 'Көрінетін бөлік.' } },
          { id: 'h1q10', text: { en: 'HTML is a...', ru: 'HTML — это...', kz: 'HTML бұл...'}, options: { en: ['Programming Language', 'Markup Language', 'Database System'], ru: ['Язык программирования', 'Язык разметки', 'Система БД'], kz: ['Бағдарламалау тілі', 'Белгілеу тілі', 'Деректер базасы'] }, correctIndex: 1, hint: { en: 'Markup.', ru: 'Разметка.', kz: 'Белгілеу.' } }
        ]
      },
      {
         id: 'html-2',
         title: { en: 'Typography & Visual Hierarchy', ru: 'Типографика и Визуальная Иерархия', kz: 'Типографика және Визуалды Иерархия' },
         theory: {
           en: 'In web architecture, content is king, but presentation defines user experience. This module explores how to structure text content using the full range of HTML typography tags and the principles of "Visual Hierarchy". Visual hierarchy is the arrangement of elements in a way that implies importance. We achieve this primarily through Heading Tags (<h1> to <h6>). An <h1> is the most critical tag on a page (and should ideally appear only once), while <h6> represents the least important sub-heading. Browsers apply default styles (font size and weight) to these tags, but their primary purpose remains structural. Beyond headings, we use formatting tags like <strong> for strong importance (rendered as bold) and <em> for emphasis (rendered as italics). It is vital to distinguish between "Physical" tags (like <b> and <i>), which only describe appearance, and "Logical" tags (like <strong> and <em>), which describe meaning. Additionally, we use "Block-level" tags like <p> and <blockquote> to separate content into readable chunks. Effective typography ensures that users can scan a page quickly and understand the relationship between different blocks of information before reading a single word.',
           ru: 'В веб-архитектуре контент — это король, но презентация определяет пользовательский опыт. В этом модуле мы изучим, как структурировать текстовый контент с помощью HTML-тегов и принципов «Визуальной иерархии». Визуальная иерархия — это такое расположение элементов, которое указывает на их важность. Мы достигаем этого прежде всего через теги заголовков (от <h1> до <h6>). <h1> — самый важный тег на странице (в идеале встречается один раз), а <h6> — подзаголовок самого низкого уровня. Браузеры применяют стили по умолчанию, но их главная роль — структурная. Помимо заголовков, мы используем <strong> для важного (жирный) и <em> для акцента (курсив). Важно отличать физические теги (<b>, <i>), которые описывают только вид, от логических (<strong>, <em>), описывающих смысл. Также мы используем блочные теги, такие как <p> и <blockquote>, для разделения текста. Хорошая типографика позволяет пользователю быстро сканировать страницу.',
           kz: 'Веб-архитектурада мазмұн басты орында, бірақ оның берілуі пайдаланушы тәжірибесін анықтайды. Бұл модульде біз HTML типографиялық тегтерді және «Визуалды иерархия» принциптерін қолдана отырып, мәтіндік мазмұнды қалай құрылымдауды үйренеміз. Визуалды иерархия - бұл элементтердің маңыздылығын білдіретіндей етіп орналасуы. Біз бұған ең алдымен тақырып тегтері (<h1>-ден <h6>-ге дейін) арқылы қол жеткіземіз. <h1> - беттегі ең маңызды тег (және идеалды түрде бір рет қана пайдаланылуы керек), ал <h6> - ең төменгі деңгейдегі тақырыпша. Браузерлер бұл тегтерге әдепкі стильдерді қолданады, бірақ олардың басты мақсаты құрылымдық болып қала береді. Тақырыптардан басқа, біз маңыздылық үшін <strong> (жуан) және екпін үшін <em> (курсив) тегтерін қолданамыз.'
         },
         example: '<section>\n    <h1>The Future of AI</h1>\n    <p>AI is transforming the modular landscape.</p>\n    \n    <article>\n        <h2>Core Mechanisms</h2>\n        <p>The system uses <strong>Neural Networks</strong> to process data.</p>\n        <blockquote>\n            "Technology is best when it brings people together."\n        </blockquote>\n        <p><em>Note:</em> Always verify your sources.</p>\n    </article>\n</section>',
         task: {
           en: 'Create a structure for a blog post. Use one <h1>, two <h2> headings, three paragraphs, and at least one <strong> and one <em> tag within the text.',
           ru: 'Создайте структуру для статьи в блоге. Используйте один заголовок <h1>, два заголовка <h2>, три абзаца и как минимум по одному тегу <strong> и <em> внутри текста.',
           kz: 'Блог жазбасы үшін құрылым жасаңыз. Мәтін ішінде бір <h1>, екі <h2> тақырыбын, үш абзацты және кем дегенде бір <strong> және бір <em> тегін қолданыңыз.'
         },
         result: {
           en: 'A page with clear visual breathing space and structured information levels.',
           ru: 'Страница с четким визуальным пространством и структурированными уровнями информации.',
           kz: 'Анық визуалды кеңістігі және құрылымдық ақпарат деңгейлері бар бет.'
         },
         testQuestions: [
          { id: 'h2q1', text: { en: 'Which header tag is most important?', ru: 'Какой тег заголовка самый важный?', kz: 'Тақырыптың ең маңызды тегі қайсысы?' }, options: { en: ['<h1>', '<h6>', '<head>'], ru: ['<h1>', '<h6>', '<head>'], kz: ['<h1>', '<h6>', '<head>'] }, correctIndex: 0, hint: { en: 'Top of the tree.', ru: 'Вершина дерева.', kz: 'Ағаштың шыңы.' } },
          { id: 'h2q2', text: { en: 'What is Visual Hierarchy?', ru: 'Что такое визуальная иерархия?', kz: 'Визуалды иерархия дегеніміз не?' }, options: { en: ['Color selection', 'Arrangement showing importance', 'A type of font'], ru: ['Подбор цветов', 'Расположение, показывающее важность', 'Тип шрифта'], kz: ['Түстерді таңдау', 'Маңыздылықты көрсететін орналасу', 'Қаріп түрі'] }, correctIndex: 1, hint: { en: 'Implicit order.', ru: 'Скрытый порядок.', kz: 'Жасырын рет.' } },
          { id: 'h2q3', text: { en: 'Difference between <strong> and <b>?', ru: 'Разница между <strong> и <b>?', kz: '<strong> және <b> арасындағы айырмашылық?' }, options: { en: ['None', '<strong> is logical, <b> is physical', '<b> is for semantic web'], ru: ['Нет разницы', '<strong> логический, <b> физический', '<b> для семантики'], kz: ['Айырмашылық жоқ', '<strong> логикалық, <b> физикалық', '<b> семантика үшін'] }, correctIndex: 1, hint: { en: 'Meaning vs Appearance.', ru: 'Смысл vs Вид.', kz: 'Мағына vs Көрініс.' } },
          { id: 'h2q4', text: { en: 'How many <h1> tags per page are recommended?', ru: 'Сколько тегов <h1> рекомендуется на страницу?', kz: 'Бір бетке неше <h1> тегі ұсынылады?' }, options: { en: ['Many', 'Zero', 'One'], ru: ['Много', 'Ноль', 'Один'], kz: ['Көп', 'Нөл', 'Бір'] }, correctIndex: 2, hint: { en: 'Unique title.', ru: 'Уникальное название.', kz: 'Бірегей атау.' } },
          { id: 'h2q5', text: { en: 'Which tag is used for a long quote?', ru: 'Какой тег для длинной цитаты?', kz: 'Ұзын дәйексөз үшін қай тег қолданылады?' }, options: { en: ['<q>', '<blockquote>', '<cite>'], ru: ['<q>', '<blockquote>', '<cite>'], kz: ['<q>', '<blockquote>', '<cite>'] }, correctIndex: 1, hint: { en: 'Block element.', ru: 'Блочный элемент.', kz: 'Блоктық элемент.' } },
          { id: 'h2q6', text: { en: 'Which tag makes text italic and semantic?', ru: 'Какой тег делает текст курсивным и семантичным?', kz: 'Қай тег мәтінді курсив және семантикалық етеді?' }, options: { en: ['<i>', '<em>', '<italic>'], ru: ['<i>', '<em>', '<italic>'], kz: ['<i>', '<em>', '<italic>'] }, correctIndex: 1, hint: { en: 'Emphasis.', ru: 'Акцент.', kz: 'Екпін.' } },
          { id: 'h2q7', text: { en: 'Heading tags range from...', ru: 'Заголовки бывают от...', kz: 'Тақырыптар ... аралығында болады.' }, options: { en: ['h1 to h3', 'h1 to h6', 'h1 to h12'], ru: ['h1 до h3', 'h1 до h6', 'h1 до h12'], kz: ['h1-ден h3-ке', 'h1-ден h6-ға', 'h1-ден h12-ге'] }, correctIndex: 1, hint: { en: 'Power of six.', ru: 'Сила шести.', kz: 'Алтылық күш.' } },
          { id: 'h2q8', text: { en: 'Standard tag for a paragraph?', ru: 'Стандартный тег для параграфа?', kz: 'Параграфтың стандартты тегі?' }, options: { en: ['<p>', '<para>', '<text>'], ru: ['<p>', '<para>', '<text>'], kz: ['<p>', '<para>', '<text>'] }, correctIndex: 0, hint: { en: 'Initial letter.', ru: 'Первая буква.', kz: 'Бірінші әріп.' } },
          { id: 'h2q9', text: { en: 'Physical tags describe...', ru: 'Физические теги описывают...', kz: 'Физикалық тегтер ... сипаттайды.' }, options: { en: ['Logical meaning', 'Appearance only', 'Browser version'], ru: ['Логический смысл', 'Только внешний вид', 'Версию браузера'], kz: ['Логикалық мағынаны', 'Тек сыртқы көріністі', 'Браузер нұсқасын'] }, correctIndex: 1, hint: { en: 'Surface level.', ru: 'Поверхностно.', kz: 'Беткі деңгей.' } },
          { id: 'h2q10', text: { en: 'Can headers be nested inside <article>?', ru: 'Можно ли вкладывать заголовки в <article>?', kz: 'Тақырыптарды <article> ішіне салуға бола ма?' }, options: { en: ['Yes', 'No', 'Only h1'], ru: ['Да', 'Нет', 'Только h1'], kz: ['Иә', 'Жоқ', 'Тек h1'] }, correctIndex: 0, hint: { en: 'Proper structure.', ru: 'Верная структура.', kz: 'Дұрыс құрылым.' } }
         ]
      },
      ...Array.from({ length: 18 }).map((_, i) => ({
         id: `html-${i + 3}`,
         title: { en: `HTML Level ${i + 3}`, ru: `HTML Уровень ${i + 3}`, kz: `HTML деңгейі ${i + 3}` },
         theory: { en: 'Building advanced layouts and accessibility.', ru: 'Создание продвинутых макетов и доступность.', kz: 'Жоғары деңгейлі макеттер мен қолжетімділік.' },
         task: { en: 'Apply the latest semantic tags.', ru: 'Примените новейшие семантические теги.', kz: 'Соңғы семантикалық тегтерді қолданыңыз.' },
         result: { en: 'Valid HTML structure.', ru: 'Валидная структура HTML.', kz: 'Жарамды HTML құрылымы.' },
         example: `<section>\n  <article>\n    <h2>Content ${i + 3}</h2>\n  </article>\n</section>`,
         testQuestions: [
          {
            id: `h${i + 3}q1`,
            text: { en: 'Is <div> semantic?', ru: 'Является ли <div> семантическим?', kz: '<div> семантикалық па?' },
            options: { en: ['No', 'Yes'], ru: ['Нет', 'Да'], kz: ['Жоқ', 'Иә'] },
            correctIndex: 0,
            hint: { en: 'It identifies nothing specific.', ru: 'Он ничего конкретно не обозначает.', kz: 'Ол нақты ештеңе білдірмейді.' }
          }
         ]
      }))
    ],
    questions: [],
    game: {
      type: 'html',
      title: { en: 'Cisco Lab', ru: 'Cisco Лаборатория', kz: 'Cisco Лаборатория' },
      description: { en: 'Build secure networks.', ru: 'Стройте защищенные сети.', kz: 'Қауіпсіз желілерді құрыңыз.' }
    }
  },
  {
    id: 'cisco',
    name: { en: 'Networking: Cisco Core', ru: 'Сети: Основы Cisco', kz: 'Желілер: Cisco негіздері' },
    icon: 'Network',
    color: 'from-blue-500 to-cyan-400',
    lessons: [
      {
        id: 'cisco-1',
        title: { en: 'Network Foundations: The OSI Model', ru: 'Основы Сетей: Модель OSI', kz: 'Желі Негіздері: OSI Моделі' },
        theory: {
          en: 'The Open Systems Interconnection (OSI) model is a conceptual framework used to understand and standardize the functions of a telecommunication or computing system without regard to its underlying internal structure and technology. It divides network communication into seven distinct layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application. This modular approach allows hardware manufacturers and software developers to ensure interoperability between different systems. For example, the Network Layer (Layer 3) handles IP addressing and routing, while the Data Link Layer (Layer 2) manages physical MAC addresses and data framing. Understanding how data travels from the Application Layer down to the Physical Layer (Encapsulation) and back up (Decapsulation) is critical for any network engineer. Troubleshooting typically follows the OSI layers either from bottom-to-top or top-to-bottom to isolate where a "break" in communication occurs. A failure at the Physical Layer (like a disconnected cable) will render all upper layers non-functional, making it the logical starting point for hardware diagnostics.',
          ru: 'Модель взаимодействия открытых систем (OSI) — это концептуальная схема, используемая для понимания и стандартизации функций телекоммуникационных или вычислительных систем. Она разделяет сетевую коммуникацию на семь уровней: Физический, Канальный, Сетевой, Транспортный, Сеансовый, Представительский и Прикладной. Этот модульный подход позволяет производителям обеспечивать совместимость систем. Например, Сетевой уровень (3) отвечает за IP-адресацию и маршрутизацию, а Канальный (2) — за MAC-адреса и кадры. Понимание того, как данные проходят от Прикладного уровня до Физического (Инкапсуляция) и обратно (Деинкапсуляция), критически важно. Устранение неполадок обычно следует по уровням OSI (снизу вверх или сверху вниз), чтобы изолировать место разрыва связи. Сбой на Физическом уровне (например, отключенный кабель) делает невозможной работу всех верхних уровней.',
          kz: 'Ашық жүйелердің өзара әрекеттесу (OSI) моделі - бұл телекоммуникациялық немесе есептеуіш жүйенің функцияларын оның ішкі құрылымы мен технологиясына қарамастан түсіну және стандарттау үшін қолданылатын тұжырымдамалық негіз. Ол желілік байланысты жеті қабатқа бөледі: Физикалық, Арналық, Желілік, Көліктік, Сеанстық, Өкілдік және Қолданбалы. Бұл модульдік тәсіл әртүрлі жүйелер арасындағы үйлесімділікті қамтамасыз етуге мүмкіндік береді. Мысалы, Желілік қабат (3-қабат) IP адрестеу мен маршруттауды реттейді, ал Арналық қабат (2-қабат) физикалық MAC адрестерін басқарады. Мәліметтердің Қолданбалы қабаттан Физикалық қабатқа дейін қалай өтетінін (Инкапсуляция) және керісінше (Деинкапсуляция) түсіну кез келген желі инженері үшін өте маңызды.'
        },
        example: '# Cisco CLI - Basic Layer 3 Interface Configuration\n# enable\n# configure terminal\n# interface GigabitEthernet0/0\n# ip address 192.168.1.1 255.255.255.0\n# no shutdown\n# exit\n\n# Verification Commands:\n# show ip interface brief\n# show run interface g0/0',
        task: {
          en: 'Identify the 7 layers of the OSI model in order from bottom to top. Then, write out the commands to assign an IP address 10.0.0.1 with subnet 255.255.255.0 to a Cisco router interface.',
          ru: 'Перечислите 7 уровней модели OSI по порядку снизу вверх. Затем напишите команды для назначения IP-адреса 10.0.0.1 с маской 255.255.255.0 интерфейсу роутера Cisco.',
          kz: 'OSI моделінің 7 қабатын төменнен жоғары қарай ретімен атап шығыңыз. Содан кейін Cisco роутер интерфейсіне 10.0.0.1 IP мекенжайын 255.255.255.0 маскасымен тағайындау командаларын жазыңыз.'
        },
        result: {
          en: 'A logical understanding of the stacking layers and a configured "Up" interface status.',
          ru: 'Логическое понимание стека уровней и статус интерфейса "Up" после конфигурации.',
          kz: 'Қабаттар стекін логикалық түсіну және конфигурациядан кейінгі интерфейстің «Up» күйі.'
        },
        testQuestions: [
          { id: 'c1q1', text: { en: 'How many layers are in the OSI model?', ru: 'Сколько уровней в модели OSI?', kz: 'OSI моделінде неше қабат бар?' }, options: { en: ['4', '7', '5'], ru: ['4', '7', '5'], kz: ['4', '7', '5'] }, correctIndex: 1, hint: { en: 'Classic number.', ru: 'Классическое число.', kz: 'Классикалық сан.' } },
          { id: 'c1q2', text: { en: 'Which layer is responsible for IP routing?', ru: 'Какой уровень отвечает за IP-маршрутизацию?', kz: 'IP маршруттау үшін қай қабат жауапты?' }, options: { en: ['Layer 2', 'Layer 3', 'Layer 4'], ru: ['Уровень 2', 'Уровень 3', 'Уровень 4'], kz: ['2-қабат', '3-қабат', '4-қабат'] }, correctIndex: 1, hint: { en: 'Network layer.', ru: 'Сетевой уровень.', kz: 'Желілік қабат.' } },
          { id: 'c1q3', text: { en: 'What is Layer 2 of the OSI model?', ru: 'Что такое 2-й уровень модели OSI?', kz: 'OSI моделінің 2-қабаты қалай аталады?' }, options: { en: ['Physical', 'Data Link', 'Transport'], ru: ['Физический', 'Канальный', 'Транспортный'], kz: ['Физикалық', 'Арналық', 'Көліктік'] }, correctIndex: 1, hint: { en: 'Frames and MACs.', ru: 'Кадры и MAC-адреса.', kz: 'Кадрлар мен MAC-адрестер.' } },
          { id: 'c1q4', text: { en: 'Which layer is the "Physical" layer?', ru: 'Какой уровень является «Физическим»?', kz: 'Қай қабат «Физикалық» болып табылады?' }, options: { en: ['Layer 1', 'Layer 7', 'Layer 5'], ru: ['Уровень 1', 'Уровень 7', 'Уровень 5'], kz: ['1-қабат', '7-қабат', '5-қабат'] }, correctIndex: 0, hint: { en: 'The foundation.', ru: 'Основание.', kz: 'Негізі.' } },
          { id: 'c1q5', text: { en: 'What is encapsulation?', ru: 'Что такое инкапсуляция?', kz: 'Инкапсуляция дегеніміз не?' }, options: { en: ['Deleting data', 'Wrapping data in headers', 'Encrypting cables'], ru: ['Удаление данных', 'Обертывание данных в заголовки', 'Шифрование кабелей'], kz: ['Деректерді өшіру', 'Мәліметтерді тақырыптарға орау', 'Кабельдерді шифрлау'] }, correctIndex: 1, hint: { en: 'Adding layers.', ru: 'Добавление уровней.', kz: 'Қабаттар қосу.' } },
          { id: 'c1q6', text: { en: 'Which layer does a switch primarily work on?', ru: 'На каком уровне в основном работает коммутатор (switch)?', kz: 'Коммутатор (switch) негізінен қай қабатта жұмыс істейді?' }, options: { en: ['Layer 1', 'Layer 2', 'Layer 3'], ru: ['Уровень 1', 'Уровень 2', 'Уровень 3'], kz: ['1-қабат', '2-қабат', '3-қабат'] }, correctIndex: 1, hint: { en: 'MAC address filtering.', ru: 'Фильтрация по MAC.', kz: 'MAC адресі бойынша сүзгілеу.' } },
          { id: 'c1q7', text: { en: 'HTTP and DNS work at which layer?', ru: 'На каком уровне работают HTTP и DNS?', kz: 'HTTP және DNS қай қабатта жұмыс істейді?' }, options: { en: ['Application (7)', 'Network (3)', 'Session (5)'], ru: ['Прикладной (7)', 'Сетевой (3)', 'Сеансовый (5)'], kz: ['Қолданбалы (7)', 'Желілік (3)', 'Сеанстық (5)'] }, correctIndex: 0, hint: { en: 'Top layer.', ru: 'Верхний уровень.', kz: 'Жоғарғы қабат.' } },
          { id: 'c1q8', text: { en: 'Command to enter global config mode?', ru: 'Команда для входа в режим глобальной конфигурации?', kz: 'Глобалды конфигурация режиміне өту командасы?' }, options: { en: ['enable', 'configure terminal', 'setup'], ru: ['enable', 'configure terminal', 'setup'], kz: ['enable', 'configure terminal', 'setup'] }, correctIndex: 1, hint: { en: 'Config t.', ru: 'Config t.', kz: 'Config t.' } },
          { id: 'c1q9', text: { en: 'What does "no shutdown" do?', ru: 'Что делает команда "no shutdown"?', kz: '"no shutdown" командасы не істейді?' }, options: { en: ['Turns off router', 'Enables the interface', 'Deletes config'], ru: ['Выключает роутер', 'Включает интерфейс', 'Удаляет настройки'], kz: ['Роутерді өшіреді', 'Интерфейсті қосады', 'Баптауларды өшіреді'] }, correctIndex: 1, hint: { en: 'Positive action.', ru: 'Позитивное действие.', kz: 'Оң әрекет.' } },
          { id: 'c1q10', text: { en: 'TCP and UDP operate at which layer?', ru: 'На каком уровне работают TCP и UDP?', kz: 'TCP және UDP қай қабатта жұмыс істейді?' }, options: { en: ['Transport (4)', 'Network (3)', 'Data Link (2)'], ru: ['Транспортный (4)', 'Сетевой (3)', 'Канальный (2)'], kz: ['Көліктік (4)', 'Желілік (3)', 'Арналық (2)'] }, correctIndex: 0, hint: { en: 'Delivery control.', ru: 'Контроль доставки.', kz: 'Жеткізуді бақылау.' } }
        ]
      },
      ...Array.from({ length: 19 }).map((_, i) => ({
        id: `cisco-${i + 2}`,
        title: { en: `Cisco Level ${i + 2}`, ru: `Cisco Уровень ${i + 2}`, kz: `Cisco деңгейі ${i + 2}` },
        theory: { en: 'Advanced networking protocols and security protocols.', ru: 'Продвинутые сетевые протоколы и протоколы безопасности.', kz: 'Жетілдірілген желілік хаттамалар мен қауіпсіздік хаттамалары.' },
        task: { en: 'Configure a virtual interface.', ru: 'Настройте виртуальный интерфейс.', kz: 'Виртуалды интерфейсті конфигурациялаңыз.' },
        result: { en: 'Successful ping.', ru: 'Успешный пинг.', kz: 'Сәтті пинг.' },
        example: 'interface Tunnel0\n ip address 10.10.10.1 255.255.255.0',
        testQuestions: [
          {
            id: `c${i + 2}q1`,
            text: { en: 'Is Layer 3 for IP?', ru: 'L3 это для IP?', kz: 'L3 бұл IP үшін бе?' },
            options: { en: ['Yes', 'No'], ru: ['Да', 'Нет'], kz: ['Иә', 'Жоқ'] },
            correctIndex: 0,
            hint: { en: 'Routing layer.', ru: 'Сетевой уровень.', kz: 'Желілік қабат.' }
          }
        ]
      })),
    ],
    questions: [],
    game: {
      type: 'cisco',
      title: { en: 'Traffic Flow', ru: 'Поток Трафика', kz: 'Трафик Ағыны' },
      description: { en: 'Route packets safely.', ru: 'Пересылайте пакеты безопасно.', kz: 'Пакеттерді қауіпсіз жіберiңіз.' }
    }
  },
  {
    id: 'csharp',
    name: { en: 'C# Software Design', ru: 'C# Проектирование', kz: 'C# Жобалау' },
    icon: 'Cpu',
    color: 'from-purple-500 to-indigo-600',
    lessons: [
      {
        id: 'csharp-1',
        title: { en: 'Introduction to C# & .NET Ecosystem', ru: 'Введение в C# и экосистему .NET', kz: 'C# және .NET экожүйесіне кіріспе' },
        theory: {
          en: 'C# (pronounced C Sharp) is a modern, object-oriented, and type-safe programming language developed by Microsoft. It runs on the .NET framework, a versatile ecosystem used for building everything from cloud-based services and desktop applications to mobile apps and games (especially through the Unity engine). C# is designed for CLI (Common Language Infrastructure), which allows it to be cross-platform through .NET Core. Key features include garbage collection, which automatically manages memory; strong typing, which prevents many common runtime errors; and a rich library of pre-built functions. Every C# program begins with a "Namespace", which organizes code, and contains "Classes" where the logic resides. The entry point of any console application is the "Main" method. Understanding the difference between value types (like int and bool) and reference types (like string and class objects) is the first step toward mastering performance and memory management in the .NET environment.',
          ru: 'C# (произносится Си Шарп) — это современный объектно-ориентированный язык программирования, разработанный Microsoft. Он работает в экосистеме .NET, которая используется для всего: от облачных сервисов и десктопных программ до мобильных игр (особенно в Unity). C# разработан в рамках CLI, что позволяет ему быть кроссплатформенным. Ключевые особенности: сборка мусора (автоматическое управление памятью), строгая типизация и богатая библиотека функций. Каждая программа начинается с «Namespace» (пространство имен) и содержит «Classes» (классы). Точка входа в консольное приложение — метод Main. Понимание разницы между значимыми типами (как int) и ссылочными (как string) — первый шаг к мастерству в .NET.',
          kz: 'C# (Си Шарп деп оқылады) - Microsoft әзірлеген заманауи, объектіге бағытталған және қауіпсіз типті бағдарламалау тілі. Ол .NET экожүйесінде жұмыс істейді, ол бұлттық қызметтер мен десктоптық қосымшалардан бастап мобильді ойындарға (әсіресе Unity арқылы) дейінгі барлық нәрсені жасау үшін қолданылады. C# қосымшалары CLI негізінде жасалған, бұл оған .NET Core арқылы кроссплатформалы болуға мүмкіндік береді.'
        },
        example: 'using System;\n\nnamespace CyberSchool\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            string studentName = "Neo";\n            int level = 10;\n            bool isActive = true;\n\n            Console.WriteLine($"Welcome, {studentName}. Level: {level}. Active: {isActive}");\n        }\n    }\n}',
        task: {
          en: 'Create a simple console application that declares a string variable for a "city" and an integer for "population". Print these values to the console using string interpolation ($"").',
          ru: 'Создайте простое консольное приложение, которое объявляет строковую переменную для города и целое число для населения. Выведите эти значения в консоль, используя интерполяцию строк ($"").',
          kz: 'Қала үшін жолдық айнымалыны және халық саны үшін бүтін санды жариялайтын қарапайым консольдік қосымша жасаңыз. Осы мәндерді жолдық интерполяцияны ($"") қолданып консольге шығарыңыз.'
        },
        result: {
          en: 'An output string clearly showing both the city name and its population count.',
          ru: 'Выходная строка, четко показывающая название города и его численность населения.',
          kz: 'Қала атауы мен халық санын нақты көрсететін шығыс жолы.'
        },
        testQuestions: [
          { id: 'cs1q1', text: { en: 'Who developed C#?', ru: 'Кто разработал C#?', kz: 'C# тілін кім әзірледі?' }, options: { en: ['Google', 'Microsoft', 'Apple'], ru: ['Google', 'Microsoft', 'Apple'], kz: ['Google', 'Microsoft', 'Apple'] }, correctIndex: 1, hint: { en: 'Windows creator.', ru: 'Создатель Windows.', kz: 'Windows жасаушысы.' } },
          { id: 'cs1q2', text: { en: 'What handles memory automatically?', ru: 'Что автоматически управляет памятью?', kz: 'Жадыны автоматты түрде не басқарады?' }, options: { en: ['Memory Handler', 'Garbage Collector', 'Cleaner'], ru: ['Memory Handler', 'Сборщик мусора', 'Cleaner'], kz: ['Memory Handler', 'Қоқыс жинағыш', 'Cleaner'] }, correctIndex: 1, hint: { en: 'GC.', ru: 'Сборщик мусора.', kz: 'GC.' } },
          { id: 'cs1q3', text: { en: 'Entry point of C# app?', ru: 'Точка входа в приложение?', kz: 'Қосымшаға кіру нүктесі?' }, options: { en: ['Start()', 'Main()', 'Entry()'], ru: ['Start()', 'Main()', 'Entry()'], kz: ['Start()', 'Main()', 'Entry()'] }, correctIndex: 1, hint: { en: 'Principal method.', ru: 'Главный метод.', kz: 'Басты әдіс.' } },
          { id: 'cs1q4', text: { en: 'C# is primarily what kind of language?', ru: 'Какой это в первую очередь язык?', kz: 'Бұл ең алдымен қандай тіл?' }, options: { en: ['Functional', 'Object-Oriented', 'Scripting'], ru: ['Функциональный', 'Объектно-Ориентированный', 'Скриптовый'], kz: ['Функционалды', 'Объектіге бағытталған', 'Скрипттік'] }, correctIndex: 1, hint: { en: 'OOP.', ru: 'ООП.', kz: 'ООП.' } },
          { id: 'cs1q5', text: { en: 'Which framework does C# run on?', ru: 'На каком фреймворке работает C#?', kz: 'C# қай фреймворкте жұмыс істейді?' }, options: { en: ['.NET', 'Node.js', 'JVM'], ru: ['.NET', 'Node.js', 'JVM'], kz: ['.NET', 'Node.js', 'JVM'] }, correctIndex: 0, hint: { en: 'Microsoft ecosystem.', ru: 'Экосистема Microsoft.', kz: 'Microsoft экожүйесі.' } },
          { id: 'cs1q6', text: { en: 'Is string a value type or reference type?', ru: 'String — это значимый или ссылочный тип?', kz: 'String - мәндік пе әлде сілтемелік тип пе?' }, options: { en: ['Value', 'Reference', 'Neither'], ru: ['Значимый', 'Ссылочный', 'Никакой'], kz: ['Мәндік', 'Сілтемелік', 'Ешқайсысы емес'] }, correctIndex: 1, hint: { en: 'Stored in heap.', ru: 'Хранится в куче.', kz: 'Үйіндіде сақталады.' } },
          { id: 'cs1q7', text: { en: 'What does CLI stand for?', ru: 'Что такое CLI?', kz: 'CLI нені білдіреді?' }, options: { en: ['Common Language Infrastructure', 'Custom Logic Interface', 'Core Link Input'], ru: ['Common Language Infrastructure', 'Custom Logic Interface', 'Core Link Input'], kz: ['Common Language Infrastructure', 'Custom Logic Interface', 'Core Link Input'] }, correctIndex: 0, hint: { en: 'Standard for .NET.', ru: 'Стандарт для .NET.', kz: '.NET стандарты.' } },
          { id: 'cs1q8', text: { en: 'Symbol for string interpolation?', ru: 'Символ для интерполяции строк?', kz: 'Жолдық интерполяция белгісі?' }, options: { en: ['@', '$', '#'], ru: ['@', '$', '#'], kz: ['@', '$', '#'] }, correctIndex: 1, hint: { en: 'Currency sign.', ru: 'Знак валюты.', kz: 'Валюта белгісі.' } },
          { id: 'cs1q9', text: { en: 'Which keyword defines a namespace?', ru: 'Какое ключевое слово задает пространство имен?', kz: 'Қай түйінді сөз атаулар кеңістігін анықтайды?' }, options: { en: ['module', 'namespace', 'package'], ru: ['module', 'namespace', 'package'], kz: ['module', 'namespace', 'package'] }, correctIndex: 1, hint: { en: 'Organizes code.', ru: 'Организует код.', kz: 'Кодты ұйымдастырады.' } },
          { id: 'cs1q10', text: { en: 'Can C# be cross-platform?', ru: 'Может ли C# быть кроссплатформенным?', kz: 'C# кроссплатформалы бола ала ма?' }, options: { en: ['Yes', 'No', 'Only on Windows'], ru: ['Да', 'Нет', 'Только на Windows'], kz: ['Иә', 'Жоқ', 'Тек Windows-та'] }, correctIndex: 0, hint: { en: '.NET Core allows this.', ru: '.NET Core позволяет.', kz: '.NET Core бұған мүмкіндік береді.' } }
        ]
      },
      ...Array.from({ length: 19 }).map((_, i) => ({
        id: `csharp-${i + 2}`,
        title: { en: `C# Level ${i + 2}`, ru: `C# Уровень ${i + 2}`, kz: `C# деңгейі ${i + 2}` },
        theory: { en: 'Robust backend development using .NET.', ru: 'Надежная разработка бэкенда на .NET.', kz: '.NET-те сенімді бэкенд әзірлеу.' },
        task: { en: 'Define a class.', ru: 'Определите класс.', kz: 'Класс анықтаңыз.' },
        result: { en: 'Compiled output.', ru: 'Скомпилированный вывод.', kz: 'Компиляцияланған нәтиже.' },
        example: 'Console.WriteLine("System initialized");',
        testQuestions: [
          {
            id: `cs${i + 2}q1`,
            text: { en: 'Is C# oop?', ru: 'C# это ООП?', kz: 'C# бұл ООП ма?' },
            options: { en: ['Yes', 'No'], ru: ['Да', 'Нет'], kz: ['Иә', 'Жоқ'] },
            correctIndex: 0,
            hint: { en: 'Objects are key.', ru: 'Объекты — это ключ.', kz: 'Объектілер - басты кілт.' }
          }
        ]
      })),
    ],
    questions: [],
    game: {
      type: 'csharp',
      title: { en: 'Debug Rush', ru: 'Дебаг Раш', kz: 'Дебаг Раш' },
      description: { en: 'Find errors in memory.', ru: 'Найдите ошибки в памяти.', kz: 'Жадыдағы қателерді табыңыз.' }
    }
  }
];
