"use strict";

/* =========================================================
   LABERINTO ALGEBRAICO
   El desafío de las expresiones
   JavaScript Vanilla - sin librerías externas
   ========================================================= */

/* =========================
   CONFIGURACIÓN
   ========================= */

const PLAYER_COLORS = [
    "#e45756",
    "#3f88c5",
    "#49a078",
    "#8e6ac8",
    "#e8a52f",
    "#e56b9f"
];

const TYPE_INFO = {
    identifica: {
        name: "Identifica",
        icon: "🧠",
        css: "type-identifica",
        pointsCorrect: 1,
        pointsWrong: -1
    },
    suma: {
        name: "Suma",
        icon: "➕",
        css: "type-suma",
        pointsCorrect: 1,
        pointsWrong: -1
    },
    resta: {
        name: "Resta",
        icon: "➖",
        css: "type-resta",
        pointsCorrect: 1,
        pointsWrong: -1
    },
    multiplicacion: {
        name: "Multiplicación",
        icon: "✖️",
        css: "type-multiplicacion",
        pointsCorrect: 1,
        pointsWrong: -1,
        bonusMove: 1
    },
    division: {
        name: "División",
        icon: "➗",
        css: "type-division",
        pointsCorrect: 2,
        pointsWrong: -1
    },
    sustituye: {
        name: "Sustituye y compara",
        icon: "🔄",
        css: "type-sustituye",
        pointsCorrect: 2,
        pointsWrong: -1
    },
    desafio: {
        name: "Desafío",
        icon: "⭐",
        css: "type-desafio",
        pointsCorrect: 3,
        pointsWrong: -2
    },
    comodin: {
        name: "Comodín",
        icon: "🃏",
        css: "type-comodin",
        pointsCorrect: 0,
        pointsWrong: 0
    }
};

/* =========================================================
   BANCO DE PREGUNTAS
   64 preguntas.
   ========================================================= */

const questionBank = [];

function addQuestion(
    category,
    difficulty,
    question,
    options,
    answer,
    explanation,
    points
) {
    questionBank.push({
        category,
        difficulty,
        question,
        options,
        answer,
        explanation,
        points
    });
}

/* ---------- ELEMENTOS DE LAS EXPRESIONES ---------- */

addQuestion(
    "identifica",
    "Fácil",
    "En la expresión 5x + 7, ¿cuál es la variable?",
    ["5", "x", "7", "5x"],
    "x",
    "La variable es la letra cuyo valor puede cambiar. En 5x + 7, la variable es x.",
    1
);

addQuestion(
    "identifica",
    "Fácil",
    "En la expresión -8y + 3, ¿cuál es el coeficiente de y?",
    ["-8", "8", "3", "y"],
    "-8",
    "El coeficiente es el número que multiplica a la variable. Aquí -8 multiplica a y.",
    1
);

addQuestion(
    "identifica",
    "Fácil",
    "¿Cuál es el término independiente de 4x² - 3x + 9?",
    ["4", "-3", "9", "x²"],
    "9",
    "El término independiente no contiene variables. Por eso es 9.",
    1
);

addQuestion(
    "identifica",
    "Fácil",
    "¿Cuántos términos tiene 3x² - 5x + 2?",
    ["1", "2", "3", "5"],
    "3",
    "Los términos están separados por signos + o -. Son 3x², -5x y 2.",
    1
);

addQuestion(
    "identifica",
    "Media",
    "¿Cuáles son términos semejantes?",
    ["3x y 3x²", "4x² y -7x²", "5x y 5y", "2x² y 2x"],
    "4x² y -7x²",
    "Los términos semejantes tienen las mismas variables con los mismos exponentes.",
    1
);

addQuestion(
    "identifica",
    "Media",
    "En -6a³ + 4a - 2, ¿cuál es el término con coeficiente -6?",
    ["-6", "a³", "-6a³", "4a"],
    "-6a³",
    "El coeficiente -6 y la parte literal a³ forman el término -6a³.",
    1
);

addQuestion(
    "identifica",
    "Media",
    "En 9mn + 4m - 6, ¿cuál es el término independiente?",
    ["9mn", "4m", "-6", "mn"],
    "-6",
    "El término independiente es el que no contiene ninguna variable.",
    1
);

addQuestion(
    "identifica",
    "Difícil",
    "¿Cuál de las siguientes parejas NO son términos semejantes?",
    ["2x² y -5x²", "7ab y -3ab", "4x y 9x", "3x² y 3x"],
    "3x² y 3x",
    "Los exponentes de x son diferentes: 2 y 1. Por eso no son semejantes.",
    1
);

/* ---------- CLASIFICACIÓN ---------- */

addQuestion(
    "identifica",
    "Fácil",
    "¿Cómo se clasifica 7x?",
    ["Monomio", "Binomio", "Trinomio", "Polinomio de cuatro términos"],
    "Monomio",
    "Tiene un solo término, por lo que es un monomio.",
    1
);

addQuestion(
    "identifica",
    "Fácil",
    "¿Cómo se clasifica x + 5?",
    ["Monomio", "Binomio", "Trinomio", "Cuatrinomio"],
    "Binomio",
    "Tiene dos términos: x y 5.",
    1
);

addQuestion(
    "identifica",
    "Fácil",
    "¿Cómo se clasifica x² + 3x + 2?",
    ["Monomio", "Binomio", "Trinomio", "No es polinomio"],
    "Trinomio",
    "Tiene tres términos: x², 3x y 2.",
    1
);

addQuestion(
    "identifica",
    "Media",
    "¿Cómo se clasifica 2x³ - x² + 4x - 8?",
    ["Monomio", "Binomio", "Trinomio", "Polinomio de cuatro términos"],
    "Polinomio de cuatro términos",
    "La expresión contiene cuatro términos.",
    1
);

addQuestion(
    "identifica",
    "Media",
    "¿Cuál de estas expresiones es un binomio?",
    ["5x", "x² + 4", "x² + x + 1", "3x² - 2x + 7"],
    "x² + 4",
    "x² + 4 contiene exactamente dos términos.",
    1
);

addQuestion(
    "identifica",
    "Media",
    "¿Cuál expresión es un trinomio?",
    ["x + 1", "4x", "x² + 2x + 1", "x³ + x² + x + 1"],
    "x² + 2x + 1",
    "Un trinomio tiene tres términos.",
    1
);

addQuestion(
    "identifica",
    "Difícil",
    "¿Cuál expresión tiene cinco términos?",
    ["x + 1", "x² + x + 1", "a + b + c + d + e", "x³ - x² + x"],
    "a + b + c + d + e",
    "La expresión tiene cinco términos separados por signos de suma.",
    1
);

/* ---------- GRADO ABSOLUTO ---------- */

addQuestion(
    "identifica",
    "Fácil",
    "¿Cuál es el grado absoluto del monomio 7x⁴?",
    ["1", "3", "4", "7"],
    "4",
    "En un monomio con una sola variable, el grado absoluto es el exponente de la variable.",
    1
);

addQuestion(
    "identifica",
    "Media",
    "¿Cuál es el grado absoluto de 5x²y³?",
    ["2", "3", "5", "5"],
    "5",
    "El grado absoluto de un monomio es la suma de sus exponentes: 2 + 3 = 5.",
    1
);

addQuestion(
    "identifica",
    "Media",
    "¿Cuál es el grado absoluto de 4a³b²c?",
    ["3", "5", "6", "4"],
    "6",
    "Se suman los exponentes: 3 + 2 + 1 = 6.",
    1
);

addQuestion(
    "identifica",
    "Media",
    "¿Cuál es el grado absoluto del polinomio 3x⁴ - 2x² + 7?",
    ["2", "3", "4", "7"],
    "4",
    "El grado del polinomio es el mayor exponente de la variable, que es 4.",
    1
);

addQuestion(
    "identifica",
    "Difícil",
    "¿Cuál es el grado absoluto de 2x³y² + 4xy⁴ - 8?",
    ["4", "5", "6", "8"],
    "5",
    "Los grados de los términos son 5, 5 y 0. El mayor es 5.",
    1
);

/* ---------- SUMA ---------- */

addQuestion(
    "suma",
    "Fácil",
    "Simplifica: 3x + 5x",
    ["8", "8x", "15x", "2x"],
    "8x",
    "Se suman los coeficientes de términos semejantes: 3 + 5 = 8.",
    1
);

addQuestion(
    "suma",
    "Fácil",
    "Simplifica: 7a + 2a - 4a",
    ["5a", "9a", "a", "13a"],
    "5a",
    "7 + 2 - 4 = 5, por lo tanto queda 5a.",
    1
);

addQuestion(
    "suma",
    "Media",
    "Calcula: (3x² + 2x) + (5x² + 4x)",
    ["8x² + 6x", "2x² + 2x", "15x² + 8x", "8x² - 2x"],
    "8x² + 6x",
    "Se suman términos semejantes: 3x² + 5x² = 8x² y 2x + 4x = 6x.",
    1
);

addQuestion(
    "suma",
    "Media",
    "Calcula: (x² + 3x + 2) + (2x² - x + 5)",
    ["3x² + 2x + 7", "3x² + 4x + 7", "x² + 2x + 7", "3x² - 2x + 7"],
    "3x² + 2x + 7",
    "Se agrupan términos semejantes: x² + 2x², 3x - x y 2 + 5.",
    1
);

addQuestion(
    "suma",
    "Difícil",
    "Calcula: (4a² - 3a + 6) + (-a² + 5a - 2)",
    ["3a² + 2a + 4", "5a² + 2a + 8", "3a² - 8a + 4", "4a² + 2a + 4"],
    "3a² + 2a + 4",
    "4a² - a² = 3a²; -3a + 5a = 2a; 6 - 2 = 4.",
    1
);

/* ---------- RESTA ---------- */

addQuestion(
    "resta",
    "Fácil",
    "Simplifica: 9x - 4x",
    ["5", "5x", "13x", "-5x"],
    "5x",
    "Se restan los coeficientes de términos semejantes: 9 - 4 = 5.",
    1
);

addQuestion(
    "resta",
    "Fácil",
    "Simplifica: 8a - 11a",
    ["3a", "-3a", "19a", "-19a"],
    "-3a",
    "8 - 11 = -3, por lo que el resultado es -3a.",
    1
);

addQuestion(
    "resta",
    "Media",
    "Calcula: (7x² + 5x) - (2x² + 3x)",
    ["5x² + 2x", "9x² + 8x", "5x² + 8x", "9x² + 2x"],
    "5x² + 2x",
    "Distribuye el signo menos y resta términos semejantes.",
    1
);

addQuestion(
    "resta",
    "Media",
    "Calcula: (4x² + 3x - 2) - (x² - 5x + 4)",
    ["3x² + 8x - 6", "3x² - 2x + 2", "5x² + 8x + 2", "3x² - 8x - 6"],
    "3x² + 8x - 6",
    "4x² - x² = 3x²; 3x - (-5x) = 8x; -2 - 4 = -6.",
    1
);

addQuestion(
    "resta",
    "Difícil",
    "Calcula: (6a³ - 2a² + 4) - (3a³ + a² - 7)",
    ["3a³ - 3a² + 11", "9a³ - a² - 3", "3a³ - a² - 3", "3a³ + 3a² + 11"],
    "3a³ - 3a² + 11",
    "Al restar el segundo polinomio, cambian sus signos: 6a³-3a³, -2a²-a² y 4-(-7).",
    1
);

/* ---------- MULTIPLICACIÓN ---------- */

addQuestion(
    "multiplicacion",
    "Fácil",
    "Multiplica: 3x · 4x",
    ["7x", "12x", "12x²", "7x²"],
    "12x²",
    "Multiplica coeficientes: 3·4 = 12 y suma exponentes: x·x = x².",
    1
);

addQuestion(
    "multiplicacion",
    "Fácil",
    "Multiplica: -2a · 5a²",
    ["-10a²", "-10a³", "10a³", "7a³"],
    "-10a³",
    "Multiplica -2·5 = -10 y suma los exponentes 1 + 2 = 3.",
    1
);

addQuestion(
    "multiplicacion",
    "Media",
    "Multiplica: 2x(3x + 4)",
    ["6x² + 8x", "6x + 8", "5x² + 6x", "6x² + 4"],
    "6x² + 8x",
    "Se aplica la propiedad distributiva: 2x·3x = 6x² y 2x·4 = 8x.",
    1
);

addQuestion(
    "multiplicacion",
    "Media",
    "Multiplica: (x + 2)(x + 3)",
    ["x² + 5x + 6", "x² + 6x + 5", "x² + 5", "x² + 6"],
    "x² + 5x + 6",
    "Se multiplican todos los términos: x² + 3x + 2x + 6 = x² + 5x + 6.",
    1
);

addQuestion(
    "multiplicacion",
    "Difícil",
    "Multiplica: (2x + 3)(x - 4)",
    ["2x² - 5x - 12", "2x² + 5x - 12", "2x² - 8x + 3", "2x² - 12"],
    "2x² - 5x - 12",
    "2x·x = 2x²; 2x·(-4) = -8x; 3x; 3·(-4) = -12. Al combinar queda -5x.",
    1
);

addQuestion(
    "multiplicacion",
    "Difícil",
    "Multiplica: (x + 2)(x² - x + 3)",
    ["x³ + x² + x + 6", "x³ + x² + x + 3", "x³ + 2x² + 3x + 6", "x³ - x² + x + 6"],
    "x³ + x² + x + 6",
    "Distribuye x y 2: x³ - x² + 3x + 2x² - 2x + 6. Se simplifica a x³ + x² + x + 6.",
    1
);

/* ---------- DIVISIÓN ---------- */

addQuestion(
    "division",
    "Fácil",
    "Divide: 12x² ÷ 3x",
    ["4x", "4x²", "9x", "36x"],
    "4x",
    "12÷3 = 4 y x²÷x = x.",
    2
);

addQuestion(
    "division",
    "Fácil",
    "Divide: -15a³ ÷ 5a",
    ["-3a²", "3a²", "-10a²", "-3a³"],
    "-3a²",
    "-15÷5 = -3 y a³÷a = a².",
    2
);

addQuestion(
    "division",
    "Media",
    "Divide: (6x³ + 9x² - 3x) ÷ 3x",
    ["2x² + 3x - 1", "2x² + 3x + 1", "3x² + 3x - 1", "2x³ + 3x² - x"],
    "2x² + 3x - 1",
    "Se divide cada término entre 3x: 6x³/3x = 2x²; 9x²/3x = 3x; -3x/3x = -1.",
    2
);

addQuestion(
    "division",
    "Media",
    "Divide: (8a² - 12a + 4) ÷ 4",
    ["2a² - 3a + 1", "2a² - 3a + 4", "4a² - 3a + 1", "2a² + 3a + 1"],
    "2a² - 3a + 1",
    "Se divide cada término entre 4.",
    2
);

addQuestion(
    "division",
    "Difícil",
    "Divide: (x² + 3x + 2) ÷ (x + 1)",
    ["x + 2", "x + 1", "x + 3", "x² + 2"],
    "x + 2",
    "x² + 3x + 2 se factoriza como (x + 1)(x + 2). Al dividir queda x + 2.",
    2
);

addQuestion(
    "division",
    "Difícil",
    "Divide: (x² - 9) ÷ (x - 3)",
    ["x - 3", "x + 3", "x² - 3", "x + 6"],
    "x + 3",
    "x² - 9 es diferencia de cuadrados: (x - 3)(x + 3).",
    2
);

addQuestion(
    "division",
    "Difícil",
    "Divide: (2x² + 5x + 2) ÷ (2x + 1)",
    ["x + 2", "2x + 2", "x + 1", "2x + 1"],
    "x + 2",
    "Multiplicar (2x + 1)(x + 2) produce 2x² + 5x + 2.",
    2
);

addQuestion(
    "division",
    "Difícil",
    "Divide: (x² - 4x + 4) ÷ (x - 2)",
    ["x - 2", "x + 2", "x - 4", "x² - 2"],
    "x - 2",
    "El numerador es (x - 2)². Al dividir por x - 2 queda x - 2.",
    2
);

/* ---------- SUSTITUCIÓN Y COMPARACIÓN ---------- */

addQuestion(
    "sustituye",
    "Fácil",
    "Si x = 3, ¿cuánto vale 2x + 5?",
    ["8", "10", "11", "12"],
    "11",
    "Sustituimos x por 3: 2(3) + 5 = 6 + 5 = 11.",
    2
);

addQuestion(
    "sustituye",
    "Fácil",
    "Si y = 4, ¿cuánto vale 3y - 2?",
    ["8", "10", "12", "14"],
    "10",
    "3(4) - 2 = 12 - 2 = 10.",
    2
);

addQuestion(
    "sustituye",
    "Media",
    "Si x = 2 y y = 3, ¿cuánto vale x + 2y?",
    ["6", "7", "8", "9"],
    "8",
    "2 + 2(3) = 2 + 6 = 8.",
    2
);

addQuestion(
    "sustituye",
    "Media",
    "Si z = -2, ¿cuánto vale z² + 3z?",
    ["-2", "0", "2", "10"],
    "-2",
    "(-2)² + 3(-2) = 4 - 6 = -2.",
    2
);

addQuestion(
    "sustituye",
    "Media",
    "Si m = 5 y n = 2, ¿cuánto vale 2m - 3n?",
    ["-4", "2", "4", "6"],
    "4",
    "2(5) - 3(2) = 10 - 6 = 4.",
    2
);

addQuestion(
    "sustituye",
    "Media",
    "Si p = 3, ¿cuánto vale p² + 2p - 1?",
    ["10", "12", "14", "16"],
    "14",
    "3² + 2(3) - 1 = 9 + 6 - 1 = 14.",
    2
);

addQuestion(
    "sustituye",
    "Difícil",
    "Si x = 2 y y = -1, ¿cuánto vale 3x² - 2y?",
    ["10", "12", "14", "16"],
    "14",
    "3(2²) - 2(-1) = 3(4) + 2 = 14.",
    2
);

addQuestion(
    "sustituye",
    "Difícil",
    "Si m = -2 y n = 3, ¿cuánto vale m² - mn + n?",
    ["1", "7", "11", "17"],
    "11",
    "(-2)² - (-2)(3) + 3 = 4 + 6 + 3 = 13.",
    2
);

/* Corrección de la respuesta anterior: 13 */
questionBank[questionBank.length - 1].answer = "13";
questionBank[questionBank.length - 1].options = ["1", "7", "11", "13"];
questionBank[questionBank.length - 1].explanation =
    "(-2)² - (-2)(3) + 3 = 4 + 6 + 3 = 13.";

/* Comparación */

addQuestion(
    "sustituye",
    "Fácil",
    "Si x = 3, compara A = 2x + 1 y B = x + 4.",
    ["A > B", "A < B", "A = B", "No se pueden comparar"],
    "A = B",
    "A = 2(3)+1 = 7 y B = 3+4 = 7. Por lo tanto, son iguales.",
    2
);

addQuestion(
    "sustituye",
    "Media",
    "Si x = 4, compara A = x² y B = 3x + 4.",
    ["A > B", "A < B", "A = B", "B = 0"],
    "A > B",
    "A = 4² = 16 y B = 3(4)+4 = 16. Son iguales.",
    2
);

/* Corrección de la comparación */
questionBank[questionBank.length - 1].answer = "A = B";
questionBank[questionBank.length - 1].explanation =
    "A = 4² = 16 y B = 3(4) + 4 = 16. Por lo tanto, A = B.";

addQuestion(
    "sustituye",
    "Media",
    "Si y = 2, compara A = 5y - 1 y B = y² + 3.",
    ["A > B", "A < B", "A = B", "B = 0"],
    "A > B",
    "A = 5(2)-1 = 9 y B = 2²+3 = 7. Por eso A > B.",
    2
);

addQuestion(
    "sustituye",
    "Difícil",
    "Si z = -3, compara A = z² y B = 2z + 15.",
    ["A > B", "A < B", "A = B", "No se pueden comparar"],
    "A < B",
    "A = (-3)² = 9 y B = 2(-3)+15 = 9. En realidad son iguales.",
    2
);

/* Corrección */
questionBank[questionBank.length - 1].answer = "A = B";
questionBank[questionBank.length - 1].explanation =
    "A = (-3)² = 9 y B = 2(-3) + 15 = 9. Por lo tanto, A = B.";

/* ---------- OPERACIONES COMBINADAS ---------- */

addQuestion(
    "desafio",
    "Media",
    "Calcula: 3 + 2(4) - 5.",
    ["4", "6", "8", "10"],
    "6",
    "Primero se realiza la multiplicación: 2(4)=8. Luego 3+8-5=6.",
    3
);

addQuestion(
    "desafio",
    "Media",
    "Calcula: 12 ÷ 3 + 2(5).",
    ["10", "12", "14", "20"],
    "14",
    "Primero 12÷3=4 y 2(5)=10. Luego 4+10=14.",
    3
);

addQuestion(
    "desafio",
    "Media",
    "Simplifica: 4x + 3 - 2x + 5.",
    ["2x + 8", "6x + 8", "2x - 2", "6x + 2"],
    "2x + 8",
    "Se agrupan términos semejantes: 4x-2x=2x y 3+5=8.",
    3
);

addQuestion(
    "desafio",
    "Difícil",
    "Calcula: 2(x + 3) - x + 4.",
    ["x + 10", "3x + 10", "x + 2", "2x + 7"],
    "x + 10",
    "2(x+3)=2x+6. Luego 2x+6-x+4 = x+10.",
    3
);

addQuestion(
    "desafio",
    "Difícil",
    "Calcula: 3x - 2(x - 4) + 5 cuando x = 2.",
    ["7", "9", "13", "17"],
    "13",
    "3(2)-2(2-4)+5 = 6 - 2(-2)+5 = 6+4+5 = 15.",
    3
);

/* Corrección */
questionBank[questionBank.length - 1].answer = "15";
questionBank[questionBank.length - 1].options = ["7", "9", "13", "15"];
questionBank[questionBank.length - 1].explanation =
    "3(2)-2(2-4)+5 = 6 - 2(-2)+5 = 6+4+5 = 15.";

addQuestion(
    "desafio",
    "Difícil",
    "Calcula: (6x² + 9x) ÷ 3x + 2 cuando x = 3.",
    ["8", "11", "13", "17"],
    "11",
    "Primero (6x²+9x)÷3x = 2x+3. Con x=3: 6+3+2=11.",
    3
);

addQuestion(
    "desafio",
    "Difícil",
    "Simplifica: 2x + 3(x - 1) - 4.",
    ["5x - 7", "5x - 1", "x - 7", "5x + 1"],
    "5x - 7",
    "2x + 3x - 3 - 4 = 5x - 7.",
    3
);

addQuestion(
    "desafio",
    "Difícil",
    "Si x = 2, calcula x² + 3x - 4 ÷ 2 respetando el orden de operaciones.",
    ["4", "6", "8", "10"],
    "6",
    "Primero 4÷2=2. Después x² + 3x - 2 = 4 + 6 - 2 = 8.",
    3
);

/* Corrección: la expresión sin paréntesis da 8 */
questionBank[questionBank.length - 1].answer = "8";
questionBank[questionBank.length - 1].options = ["4", "6", "8", "10"];
questionBank[questionBank.length - 1].explanation =
    "Primero 4÷2=2. Después x² + 3x - 2 = 4 + 6 - 2 = 8.";

/* ---------- DESAFÍOS ADICIONALES ---------- */

addQuestion(
    "desafio",
    "Difícil",
    "¿Qué expresión resulta de combinar 3x + 2x² y restarle x² - 4x?",
    ["x² + 7x", "3x² - 2x", "x² - x", "2x² + 7x"],
    "x² + 7x",
    "3x + 2x² - (x² - 4x) = 2x² - x² + 3x + 4x = x² + 7x.",
    3
);

addQuestion(
    "desafio",
    "Difícil",
    "Si x = 2, ¿cuál es el valor de (x + 3)(x - 1)?",
    ["3", "5", "7", "9"],
    "5",
    "(2+3)(2-1)=5·1=5.",
    3
);

addQuestion(
    "desafio",
    "Difícil",
    "Si p = 2, calcula 2p³ - p² + 3p.",
    ["14", "16", "18", "20"],
    "18",
    "2(2³) - 2² + 3(2) = 16 - 4 + 6 = 18.",
    3
);

addQuestion(
    "desafio",
    "Difícil",
    "¿Cuál es el resultado de (x + 2)²?",
    ["x² + 2x + 4", "x² + 4x + 4", "x² + 4", "x² + 2"],
    "x² + 4x + 4",
    "Aplicando el producto notable: (x+2)² = x² + 4x + 4.",
    3
);

addQuestion(
    "desafio",
    "Difícil",
    "¿Cuál es el resultado de (x - 3)²?",
    ["x² - 3x + 9", "x² - 6x + 9", "x² + 6x + 9", "x² - 9"],
    "x² - 6x + 9",
    "El cuadrado de un binomio: x² - 2(3)x + 3² = x² - 6x + 9.",
    3
);

addQuestion(
    "desafio",
    "Media",
    "¿Cuál es el resultado de x(x + 5)?",
    ["x² + 5", "x² + 5x", "2x + 5", "x²"],
    "x² + 5x",
    "Se aplica la distributiva: x·x + x·5 = x² + 5x.",
    3
);

addQuestion(
    "desafio",
    "Media",
    "Si n = 4, ¿cuánto vale n² - 2n + 1?",
    ["7", "8", "9", "10"],
    "9",
    "4² - 2(4) + 1 = 16 - 8 + 1 = 9.",
    3
);

addQuestion(
    "desafio",
    "Difícil",
    "Simplifica: 5x² - 2x + 3x² + 7x - 4.",
    ["8x² + 5x - 4", "8x² - 9x - 4", "2x² + 5x - 4", "8x² + 9x + 4"],
    "8x² + 5x - 4",
    "5x²+3x²=8x²; -2x+7x=5x; queda -4.",
    3
);

addQuestion(
    "desafio",
    "Difícil",
    "Divide: (3x³ - 6x² + 9x) ÷ 3x.",
    ["x² - 2x + 3", "x² - 3x + 3", "3x² - 2x + 3", "x² + 2x + 3"],
    "x² - 2x + 3",
    "Cada término se divide entre 3x: x² - 2x + 3.",
    3
);

addQuestion(
    "desafio",
    "Difícil",
    "Si x = 1 y y = 2, ¿cuánto vale 2x² + 3y - xy?",
    ["5", "6", "7", "8"],
    "7",
    "2(1²)+3(2)-(1)(2)=2+6-2=6.",
    3
);

/* Corrección */
questionBank[questionBank.length - 1].answer = "6";
questionBank[questionBank.length - 1].options = ["5", "6", "7", "8"];
questionBank[questionBank.length - 1].explanation =
    "2(1²)+3(2)-(1)(2)=2+6-2=6.";

/* =========================================================
   ESTADO DEL JUEGO
   ========================================================= */

let players = [];
let currentPlayerIndex = 0;
let round = 1;

let selectedAnswer = null;
let currentQuestion = null;
let currentCellType = null;
let pendingAction = null;

let lastQuestionIndex = -1;
let roundTurns = 0;
let gameFinished = false;
let turnLocked = false;

/*
   TABLERO

   Posición 0 = SALIDA
   Posición 40 = META

   El recorrido tiene 41 posiciones.
*/

const boardPositions = [
    { type: "start", label: "SALIDA", icon: "🚩" },

    { type: "identifica", label: "Identifica", icon: "🧠" },
    { type: "suma", label: "Suma", icon: "➕" },
    { type: "resta", label: "Resta", icon: "➖" },
    { type: "multiplicacion", label: "Multiplica", icon: "✖️" },
    { type: "division", label: "Divide", icon: "➗" },
    { type: "sustituye", label: "Sustituye", icon: "🔄" },
    { type: "desafio", label: "Desafío", icon: "⭐" },
    { type: "comodin", label: "Comodín", icon: "🃏" },

    { type: "suma", label: "Suma", icon: "➕" },
    { type: "resta", label: "Resta", icon: "➖" },
    { type: "identifica", label: "Identifica", icon: "🧠" },
    { type: "division", label: "Divide", icon: "➗" },
    { type: "multiplicacion", label: "Multiplica", icon: "✖️" },
    { type: "sustituye", label: "Sustituye", icon: "🔄" },
    { type: "desafio", label: "Desafío", icon: "⭐" },
    { type: "comodin", label: "Comodín", icon: "🃏" },

    { type: "resta", label: "Resta", icon: "➖" },
    { type: "suma", label: "Suma", icon: "➕" },
    { type: "identifica", label: "Identifica", icon: "🧠" },
    { type: "multiplicacion", label: "Multiplica", icon: "✖️" },
    { type: "division", label: "Divide", icon: "➗" },
    { type: "sustituye", label: "Sustituye", icon: "🔄" },
    { type: "desafio", label: "Desafío", icon: "⭐" },
    { type: "comodin", label: "Comodín", icon: "🃏" },
    { type: "suma", label: "Suma", icon: "➕" },

    { type: "resta", label: "Resta", icon: "➖" },
    { type: "division", label: "Divide", icon: "➗" },
    { type: "multiplicacion", label: "Multiplica", icon: "✖️" },
    { type: "identifica", label: "Identifica", icon: "🧠" },
    { type: "sustituye", label: "Sustituye", icon: "🔄" },
    { type: "desafio", label: "Desafío", icon: "⭐" },
    { type: "comodin", label: "Comodín", icon: "🃏" },
    { type: "suma", label: "Suma", icon: "➕" },
    { type: "resta", label: "Resta", icon: "➖" },

    { type: "division", label: "Divide", icon: "➗" },
    { type: "multiplicacion", label: "Multiplica", icon: "✖️" },
    { type: "sustituye", label: "Sustituye", icon: "🔄" },
    { type: "desafio", label: "Desafío", icon: "⭐" },
    { type: "comodin", label: "Comodín", icon: "🃏" },

    { type: "meta", label: "META", icon: "🏁" }
];

const DOM = {};

/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    cacheDom();
    setupPlayerInputs();
    bindEvents();
    renderBoard();

    /*
       El botón Continuar debe comenzar deshabilitado.
    */
    DOM.btnContinue.disabled = true;
});

/* =========================================================
   DOM
   ========================================================= */

function cacheDom() {
    DOM.startScreen = document.getElementById("screen-start");
    DOM.setupScreen = document.getElementById("screen-setup");
    DOM.gameScreen = document.getElementById("screen-game");
    DOM.challengeScreen = document.getElementById("screen-challenge");
    DOM.finishScreen = document.getElementById("screen-finish");

    DOM.btnStart = document.getElementById("btn-start");
    DOM.btnBackStart = document.getElementById("btn-back-start");
    DOM.btnStartGame = document.getElementById("btn-start-game");

    DOM.playerCount = document.getElementById("player-count");
    DOM.playerInputs = document.getElementById("player-inputs");

    DOM.board = document.getElementById("board");

    DOM.roundNumber = document.getElementById("round-number");
    DOM.currentPlayerName = document.getElementById("current-player-name");
    DOM.currentPlayerScore = document.getElementById("current-player-score");

    DOM.progressFill = document.getElementById("progress-fill");
    DOM.progressText = document.getElementById("progress-text");

    DOM.sidebarPlayerName = document.getElementById("sidebar-player-name");
    DOM.sidebarPlayerPosition =
        document.getElementById("sidebar-player-position");

    DOM.turnPlayerColor =
        document.getElementById("turn-player-color");

    DOM.scoreboard = document.getElementById("scoreboard");

    DOM.dice = document.getElementById("dice");
    DOM.diceMessage = document.getElementById("dice-message");
    DOM.btnRoll = document.getElementById("btn-roll");

    DOM.challengeCategory =
        document.getElementById("challenge-category");

    DOM.challengeDifficulty =
        document.getElementById("challenge-difficulty");

    DOM.challengePoints =
        document.getElementById("challenge-points");

    DOM.challengeQuestion =
        document.getElementById("challenge-question");

    DOM.answerOptions =
        document.getElementById("answer-options");

    DOM.btnCheck =
        document.getElementById("btn-check");

    DOM.challengeResult =
        document.getElementById("challenge-result");

    DOM.resultIcon =
        document.getElementById("result-icon");

    DOM.resultTitle =
        document.getElementById("result-title");

    DOM.resultAnswer =
        document.getElementById("result-answer");

    DOM.resultExplanation =
        document.getElementById("result-explanation");

    DOM.resultPoints =
        document.getElementById("result-points");

    DOM.btnContinue =
        document.getElementById("btn-continue");

    DOM.btnCancelChallenge =
        document.getElementById("btn-cancel-challenge");

    DOM.wildcardModal =
        document.getElementById("wildcard-modal");

    DOM.wildcardText =
        document.getElementById("wildcard-text");

    DOM.btnWildcardContinue =
        document.getElementById("btn-wildcard-continue");

    DOM.winnerName =
        document.getElementById("winner-name");

    DOM.winnerScore =
        document.getElementById("winner-score");

    DOM.winnerPosition =
        document.getElementById("winner-position");

    DOM.finalRounds =
        document.getElementById("final-rounds");

    DOM.winnerColor =
        document.getElementById("winner-color");

    DOM.finishMessage =
        document.getElementById("finish-message");

    DOM.btnNewGame =
        document.getElementById("btn-new-game");

    DOM.toast =
        document.getElementById("toast");
}

/* =========================================================
   EVENTOS
   ========================================================= */

function bindEvents() {

    DOM.btnStart.addEventListener("click", () => {
        showScreen("setup");
    });

    DOM.btnBackStart.addEventListener("click", () => {
        showScreen("start");
    });

    DOM.playerCount.addEventListener(
        "change",
        setupPlayerInputs
    );

    DOM.btnStartGame.addEventListener(
        "click",
        startGame
    );

    DOM.btnRoll.addEventListener(
        "click",
        rollDice
    );

    DOM.btnCheck.addEventListener(
        "click",
        checkAnswer
    );

    DOM.btnContinue.addEventListener(
        "click",
        continueAfterChallenge
    );

    DOM.btnCancelChallenge.addEventListener(
        "click",
        cancelChallenge
    );

    DOM.btnWildcardContinue.addEventListener(
        "click",
        finishWildcard
    );

    DOM.btnNewGame.addEventListener("click", () => {
        resetGame();
        setupPlayerInputs();
        showScreen("setup");
    });
}

/* =========================================================
   PANTALLAS
   ========================================================= */

function showScreen(screenName) {

    const screens = {
        start: DOM.startScreen,
        setup: DOM.setupScreen,
        game: DOM.gameScreen,
        challenge: DOM.challengeScreen,
        finish: DOM.finishScreen
    };

    Object.values(screens).forEach(screen => {
        if (screen) {
            screen.classList.remove("active");
        }
    });

    if (screens[screenName]) {
        screens[screenName].classList.add("active");
    }
}

/* =========================================================
   JUGADORES
   ========================================================= */

function setupPlayerInputs() {

    const count = Number(DOM.playerCount.value);

    DOM.playerInputs.innerHTML = "";

    for (let i = 0; i < count; i++) {

        const wrapper = document.createElement("div");
        wrapper.className = "player-input";

        const color = document.createElement("span");
        color.className = "player-color-preview";
        color.style.backgroundColor = PLAYER_COLORS[i];

        const labelWrap = document.createElement("div");
        labelWrap.style.flex = "1";

        const label = document.createElement("label");
        label.textContent = `JUGADOR ${i + 1}`;

        const input = document.createElement("input");

        input.type = "text";
        input.maxLength = 18;
        input.placeholder =
            `Nombre del jugador ${i + 1}`;

        input.dataset.playerIndex = String(i);

        labelWrap.appendChild(label);
        labelWrap.appendChild(input);

        wrapper.appendChild(color);
        wrapper.appendChild(labelWrap);

        DOM.playerInputs.appendChild(wrapper);
    }
}

/* =========================================================
   INICIAR PARTIDA
   ========================================================= */

function startGame() {

    const inputs =
        Array.from(
            DOM.playerInputs.querySelectorAll("input")
        );

    players = inputs.map((input, index) => ({
        id: index,
        name:
            input.value.trim() ||
            `Jugador ${index + 1}`,
        color: PLAYER_COLORS[index],
        position: 0,
        score: 0,
        reachedMeta: false,
        lastMove: 0
    }));

    currentPlayerIndex = 0;
    round = 1;
    roundTurns = 0;

    gameFinished = false;
    turnLocked = false;

    selectedAnswer = null;
    currentQuestion = null;
    currentCellType = null;
    pendingAction = null;

    lastQuestionIndex = -1;

    DOM.dice.textContent = "?";
    DOM.diceMessage.textContent = "Pulsa para lanzar";
    DOM.btnRoll.disabled = false;

    DOM.btnContinue.disabled = true;

    renderBoard();
    updateGameUI();

    showScreen("game");

    announce(
        `${players[0].name} comienza la partida. ¡Buena suerte!`
    );
}

/* =========================================================
   TABLERO
   ========================================================= */

function renderBoard() {

    DOM.board.innerHTML = "";

    const visualCells = [];

    for (let row = 0; row < 5; row++) {

        const start =
            row === 0 ? 0 :
            row === 1 ? 9 :
            row === 2 ? 18 :
            row === 3 ? 27 :
            36;

        const end =
            row === 0 ? 8 :
            row === 1 ? 17 :
            row === 2 ? 26 :
            row === 3 ? 35 :
            40;

        const positions = [];

        for (let pos = start; pos <= end; pos++) {
            positions.push(pos);
        }

        if (row === 1 || row === 3) {
            positions.reverse();
        }

        while (positions.length < 9) {
            positions.push(null);
        }

        positions.forEach(position => {

            const cell =
                document.createElement("div");

            if (position === null) {
                cell.className =
                    "board-cell empty";

                visualCells.push(cell);
                return;
            }

            const data =
                boardPositions[position];

            cell.className = "board-cell";

            if (position === 0) {

                cell.classList.add(
                    "cell-start"
                );

            } else if (position === 40) {

                cell.classList.add(
                    "cell-meta"
                );

            } else {

                cell.classList.add(
                    TYPE_INFO[data.type].css
                );
            }

            cell.dataset.position =
                String(position);

            const number =
                document.createElement("div");

            number.className = "cell-number";

            if (position === 0) {
                number.textContent = "INICIO";
            } else if (position === 40) {
                number.textContent = "META";
            } else {
                number.textContent = position;
            }

            const icon =
                document.createElement("div");

            icon.className = "cell-icon";
            icon.textContent = data.icon;

            const name =
                document.createElement("div");

            name.className = "cell-name";
            name.textContent = data.label;

            const fichaContainer =
                document.createElement("div");

            fichaContainer.className =
                "ficha-container";

            fichaContainer.id =
                `fichas-${position}`;

            cell.appendChild(number);
            cell.appendChild(icon);
            cell.appendChild(name);
            cell.appendChild(fichaContainer);

            visualCells.push(cell);
        });
    }

    visualCells.forEach(cell => {
        DOM.board.appendChild(cell);
    });

    updatePieces();
}

/* =========================================================
   FICHAS
   ========================================================= */

function updatePieces() {

    document
        .querySelectorAll(".ficha-container")
        .forEach(container => {
            container.innerHTML = "";
        });

    players.forEach((player, index) => {

        const container =
            document.getElementById(
                `fichas-${player.position}`
            );

        if (!container) {
            return;
        }

        const ficha =
            document.createElement("span");

        ficha.className = "ficha";

        if (index === currentPlayerIndex) {
            ficha.classList.add("current");
        }

        ficha.style.backgroundColor =
            player.color;

        ficha.title = player.name;

        container.appendChild(ficha);
    });
}

/* =========================================================
   INTERFAZ
   ========================================================= */

function updateGameUI() {

    if (!players.length) {
        return;
    }

    const current =
        players[currentPlayerIndex];

    DOM.roundNumber.textContent = round;

    DOM.currentPlayerName.textContent =
        current.name;

    DOM.currentPlayerScore.textContent =
        current.score;

    DOM.sidebarPlayerName.textContent =
        current.name;

    DOM.sidebarPlayerPosition.textContent =
        getPositionLabel(current.position);

    DOM.turnPlayerColor.style.backgroundColor =
        current.color;

    const progress =
        Math.round(
            (current.position / 40) * 100
        );

    DOM.progressFill.style.width =
        `${progress}%`;

    DOM.progressText.textContent =
        current.position === 40
            ? "META"
            : `${current.position}/40`;

    updateScoreboard();
    updatePieces();
}

/* =========================================================
   MARCADOR
   ========================================================= */

function updateScoreboard() {

    DOM.scoreboard.innerHTML = "";

    const ranking =
        [...players].sort((a, b) => {

            if (b.score !== a.score) {
                return b.score - a.score;
            }

            return b.position - a.position;
        });

    ranking.forEach(player => {

        const row =
            document.createElement("div");

        row.className = "score-row";

        if (player.id === currentPlayerIndex) {
            row.classList.add("active");
        }

        const dot =
            document.createElement("span");

        dot.className = "score-dot";
        dot.style.backgroundColor =
            player.color;

        const nameWrap =
            document.createElement("div");

        const name =
            document.createElement("div");

        name.textContent = player.name;

        const position =
            document.createElement("div");

        position.className =
            "score-position";

        position.textContent =
            player.position === 40
                ? "META"
                : `Casilla ${player.position}`;

        nameWrap.appendChild(name);
        nameWrap.appendChild(position);

        const points =
            document.createElement("span");

        points.className =
            "score-points";

        points.textContent =
            `${player.score} pts`;

        row.appendChild(dot);
        row.appendChild(nameWrap);
        row.appendChild(points);

        DOM.scoreboard.appendChild(row);
    });
}

function getPositionLabel(position) {

    if (position === 0) {
        return "Salida";
    }

    if (position === 40) {
        return "🏁 META";
    }

    return `Casilla ${position}`;
}

/* =========================================================
   DADO
   ========================================================= */

function rollDice() {

    if (
        DOM.btnRoll.disabled ||
        gameFinished ||
        turnLocked
    ) {
        return;
    }

    turnLocked = true;

    DOM.btnRoll.disabled = true;

    DOM.dice.classList.add("rolling");
    DOM.diceMessage.textContent = "Lanzando...";

    let animationCount = 0;

    const interval =
        setInterval(() => {

            const temporaryValue =
                Math.floor(
                    Math.random() * 6
                ) + 1;

            DOM.dice.textContent =
                temporaryValue;

            animationCount++;

            if (animationCount >= 7) {

                clearInterval(interval);

                const result =
                    Math.floor(
                        Math.random() * 6
                    ) + 1;

                DOM.dice.textContent =
                    result;

                DOM.dice.classList.remove(
                    "rolling"
                );

                DOM.diceMessage.textContent =
                    `${players[currentPlayerIndex].name} obtuvo ${result}`;

                setTimeout(() => {
                    moveCurrentPlayer(result);
                }, 500);
            }

        }, 90);
}

/* =========================================================
   MOVIMIENTO
   ========================================================= */

function moveCurrentPlayer(steps) {

    const player =
        players[currentPlayerIndex];

    const oldPosition =
        player.position;

    const newPosition =
        Math.min(
            40,
            oldPosition + steps
        );

    player.position = newPosition;
    player.lastMove = steps;

    if (newPosition === 40) {
        player.reachedMeta = true;
    }

    updateGameUI();

    const movementMessage =
        newPosition === 40

            ? `${player.name} llegó a META. Ahora necesita al menos 5 puntos algebraicos para poder ganar.`

            : `${player.name} avanzó ${steps} casilla${steps === 1 ? "" : "s"}.`;

    announce(movementMessage);

    setTimeout(() => {
        handleLandingCell();
    }, 650);
}

/* =========================================================
   CASILLA
   ========================================================= */

function handleLandingCell() {

    const player =
        players[currentPlayerIndex];

    const cell =
        boardPositions[player.position];

    if (player.position === 40) {

        finishTurnWithoutChallenge();

        return;
    }

    currentCellType = cell.type;

    if (cell.type === "comodin") {

        executeWildcard();

        return;
    }

    openChallenge(cell.type);
}

/* =========================================================
   PREGUNTAS
   ========================================================= */

function getQuestionsByType(type) {

    if (type === "identifica") {
        return questionBank.filter(
            q => q.category === "identifica"
        );
    }

    if (type === "suma") {
        return questionBank.filter(
            q => q.category === "suma"
        );
    }

    if (type === "resta") {
        return questionBank.filter(
            q => q.category === "resta"
        );
    }

    if (type === "multiplicacion") {
        return questionBank.filter(
            q => q.category === "multiplicacion"
        );
    }

    if (type === "division") {
        return questionBank.filter(
            q => q.category === "division"
        );
    }

    if (type === "sustituye") {
        return questionBank.filter(
            q => q.category === "sustituye"
        );
    }

    if (type === "desafio") {
        return questionBank.filter(
            q => q.category === "desafio"
        );
    }

    return questionBank;
}

function chooseQuestion(type) {

    let pool =
        getQuestionsByType(type);

    if (!pool.length) {
        pool = questionBank;
    }

    let candidates =
        pool.filter(q => {

            const globalIndex =
                questionBank.indexOf(q);

            return globalIndex !==
                lastQuestionIndex;
        });

    if (!candidates.length) {
        candidates = pool;
    }

    const selected =
        candidates[
            Math.floor(
                Math.random() *
                candidates.length
            )
        ];

    lastQuestionIndex =
        questionBank.indexOf(selected);

    return selected;
}

/* =========================================================
   ABRIR RETO
   ========================================================= */

function openChallenge(type) {

    currentQuestion =
        chooseQuestion(type);

    selectedAnswer = null;

    const info =
        TYPE_INFO[type];

    DOM.challengeCategory.textContent =
        info.name.toUpperCase();

    DOM.challengeDifficulty.textContent =
        currentQuestion.difficulty.toUpperCase();

    DOM.challengePoints.textContent =
        info.pointsCorrect > 0
            ? `+${info.pointsCorrect}`
            : "0";

    DOM.challengeQuestion.textContent =
        currentQuestion.question;

    DOM.answerOptions.innerHTML = "";

    currentQuestion.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");

            button.className =
                "answer-option";

            button.type = "button";

            button.dataset.value =
                option;

            const letter =
                document.createElement("span");

            letter.className =
                "answer-letter";

            letter.textContent =
                String.fromCharCode(
                    65 + index
                );

            const text =
                document.createElement("span");

            text.textContent = option;

            button.appendChild(letter);
            button.appendChild(text);

            button.addEventListener(
                "click",
                () => {
                    selectAnswer(
                        button,
                        option
                    );
                }
            );

            DOM.answerOptions.appendChild(
                button
            );
        }
    );

    DOM.challengeResult.className =
        "challenge-result hidden";

    DOM.resultTitle.textContent = "";
    DOM.resultAnswer.textContent = "";
    DOM.resultExplanation.textContent = "";
    DOM.resultPoints.textContent = "";

    /*
       IMPORTANTE:
       al abrir una pregunta se puede comprobar,
       pero todavía NO se puede continuar.
    */

    DOM.btnCheck.disabled = false;
    DOM.btnContinue.disabled = true;

    showScreen("challenge");
}

/* =========================================================
   SELECCIONAR RESPUESTA
   ========================================================= */

function selectAnswer(button, value) {

    if (DOM.btnCheck.disabled) {
        return;
    }

    document
        .querySelectorAll(".answer-option")
        .forEach(option => {
            option.classList.remove(
                "selected"
            );
        });

    button.classList.add("selected");

    selectedAnswer = value;
}

/* =========================================================
   COMPROBAR RESPUESTA
   ========================================================= */

function checkAnswer() {

    if (selectedAnswer === null) {

        announce(
            "Selecciona una respuesta antes de comprobar."
        );

        return;
    }

    /*
       Evita comprobar dos veces.
    */

    if (DOM.btnCheck.disabled) {
        return;
    }

    DOM.btnCheck.disabled = true;

    /*
       AQUÍ ESTABA EL PROBLEMA PRINCIPAL.

       Después de comprobar, habilitamos CONTINUAR.
    */

    DOM.btnContinue.disabled = false;

    const player =
        players[currentPlayerIndex];

    const info =
        TYPE_INFO[currentCellType];

    const correct =
        selectedAnswer ===
        currentQuestion.answer;

    let pointsChange = 0;

    if (correct) {
        pointsChange =
            info.pointsCorrect;
    } else {
        pointsChange =
            info.pointsWrong;
    }

    player.score =
        Math.max(
            0,
            player.score + pointsChange
        );

    DOM.challengeResult.className =
        `challenge-result ${
            correct
                ? "correct"
                : "incorrect"
        }`;

    DOM.resultIcon.textContent =
        correct ? "✓" : "✕";

    DOM.resultTitle.textContent =
        correct
            ? "CORRECTO"
            : "INCORRECTO";

    DOM.resultAnswer.textContent =
        `Respuesta correcta: ${currentQuestion.answer}`;

    DOM.resultExplanation.textContent =
        currentQuestion.explanation;

    if (pointsChange > 0) {

        DOM.resultPoints.textContent =
            `+${pointsChange} punto${
                pointsChange === 1
                    ? ""
                    : "s"
            } algebraico${
                pointsChange === 1
                    ? ""
                    : "s"
            }`;

    } else if (pointsChange < 0) {

        DOM.resultPoints.textContent =
            `${pointsChange} punto${
                Math.abs(pointsChange) === 1
                    ? ""
                    : "s"
            }. La puntuación no puede bajar de 0.`;

    } else {

        DOM.resultPoints.textContent =
            "Sin cambio de puntuación.";
    }

    updateGameUI();
}

/* =========================================================
   CONTINUAR DESPUÉS DEL RETO
   ========================================================= */

function continueAfterChallenge() {
    const player = players[currentPlayerIndex];
    const info = TYPE_INFO[currentCellType];

    /* =========================================
       BONO DE MULTIPLICACIÓN
       ========================================= */

    if (
        currentCellType === "multiplicacion" &&
        DOM.resultTitle.textContent === "CORRECTO" &&
        info.bonusMove
    ) {
        player.position = Math.min(
            40,
            player.position + info.bonusMove
        );

        announce(
            `${player.name} recibe el bono de multiplicación y avanza una casilla.`
        );
    }

    /* =========================================
       VOLVER A LA PANTALLA DEL TABLERO
       ========================================= */

    showScreen("game");

    /* Actualizamos tablero y marcador */
    updateGameUI();

    /* =========================================
       TERMINAR EL TURNO
       ========================================= */

    finishTurn();
}

/* =========================================================
   CANCELAR RETO
   ========================================================= */

function cancelChallenge() {

    announce(
        "El reto no puede omitirse. Debes seleccionar una respuesta."
    );
}

/* =========================================================
   FIN DE TURNO
   ========================================================= */

function finishTurnWithoutChallenge() {
    finishTurn();
}

function finishTurn() {

    if (gameFinished) {
        return;
    }

    /*
       Evita finalizar dos veces el mismo turno.
    */

    if (!turnLocked) {
        return;
    }

    roundTurns++;

    /*
       Primero comprobamos si alguien puede ganar.
       Esto ocurre DESPUÉS de que todos hayan tenido
       su turno en la ronda.
    */

    if (roundTurns >= players.length) {

        const winnerCandidate =
            determineWinner();

        if (winnerCandidate) {

            setTimeout(() => {

                endGame(
                    winnerCandidate
                );

            }, 700);

            return;
        }

        /*
           Nadie cumple todavía las condiciones
           de victoria.
        */

        round++;

        roundTurns = 0;

        currentPlayerIndex = 0;

        turnLocked = false;

        DOM.dice.textContent = "?";

        DOM.diceMessage.textContent =
            "Nueva ronda";

        DOM.btnRoll.disabled = false;

        announce(
            `Ronda ${round}. Todos vuelven a tener un turno.`
        );

        updateGameUI();

        return;
    }

    /*
       Pasa al siguiente jugador.
    */

    currentPlayerIndex =
        (currentPlayerIndex + 1) %
        players.length;

    turnLocked = false;

    DOM.dice.textContent = "?";

    DOM.diceMessage.textContent =
        "Pulsa para lanzar";

    DOM.btnRoll.disabled = false;

    updateGameUI();

    announce(
        `Turno de ${players[currentPlayerIndex].name}.`
    );
}

/* =========================================================
   DETERMINAR GANADOR
   ========================================================= */

function determineWinner() {

    /*
       REGLA DE VICTORIA:

       1. El jugador debe estar en META.
       2. Debe tener al menos 5 puntos algebraicos.

       Llegar a META con menos de 5 puntos
       NO permite ganar.
    */

    const eligiblePlayers =
        players.filter(player =>
            player.position === 40 &&
            player.score >= 5
        );

    /*
       Nadie cumple las condiciones.
    */

    if (!eligiblePlayers.length) {

        /*
           Si alguien llegó a META pero no tiene
           los 5 puntos necesarios, avisamos.
        */

        const atMetaWithoutEnoughPoints =
            players.find(player =>
                player.position === 40 &&
                player.score < 5
            );

        if (atMetaWithoutEnoughPoints) {

            announce(
                `${atMetaWithoutEnoughPoints.name} llegó a META, pero necesita al menos 5 puntos algebraicos para ganar.`
            );
        }

        return null;
    }

    /*
       Si hay varios jugadores elegibles,
       gana quien tenga más puntos.
    */

    const ranking =
        [...eligiblePlayers].sort(
            (a, b) => {

                if (b.score !== a.score) {
                    return b.score - a.score;
                }

                /*
                   Si empatan en puntos,
                   gana quien llegó primero.
                   Como ambos están en META, usamos
                   el orden de jugador como desempate.
                */

                return a.id - b.id;
            }
        );

    return ranking[0];
}

/* =========================================================
   FINAL DE PARTIDA
   ========================================================= */

function endGame(winner) {

    gameFinished = true;
    turnLocked = true;

    DOM.btnRoll.disabled = true;
    DOM.btnContinue.disabled = true;

    DOM.winnerName.textContent =
        winner.name;

    DOM.winnerScore.textContent =
        winner.score;

    DOM.winnerPosition.textContent =
        winner.position === 40
            ? "META"
            : `CASILLA ${winner.position}`;

    DOM.finalRounds.textContent =
        round;

    DOM.winnerColor.style.backgroundColor =
        winner.color;

    const tiedScorePlayers =
        players.filter(
            player =>
                player.score === winner.score &&
                player.position === 40
        );

    if (tiedScorePlayers.length > 1) {

        DOM.finishMessage.textContent =
            `${winner.name} gana el desempate por orden de llegada.`;

    } else {

        DOM.finishMessage.textContent =
            `${winner.name} llegó a META con ${winner.score} puntos algebraicos y cumple las condiciones de victoria. ¡Excelente trabajo!`;
    }

    showScreen("finish");
}

/* =========================================================
   COMODINES
   ========================================================= */

const wildcardActions = [

    {
        text: "¡Avanza dos casillas!",

        execute(player) {

            player.position =
                Math.min(
                    40,
                    player.position + 2
                );

            if (player.position === 40) {
                player.reachedMeta = true;
            }
        }
    },

    {
        text: "¡Retrocede una casilla!",

        execute(player) {

            player.position =
                Math.max(
                    0,
                    player.position - 1
                );
        }
    },

    {
        text: "¡Ganas dos puntos algebraicos!",

        execute(player) {

            player.score += 2;
        }
    },

    {
        text: "¡Pierdes un punto algebraico!",

        execute(player) {

            player.score =
                Math.max(
                    0,
                    player.score - 1
                );
        }
    },

    {
        text: "¡Intercambias posición con el jugador que esté inmediatamente por delante!",

        execute(player) {

            const ahead =
                players
                    .filter(other =>
                        other.id !== player.id &&
                        other.position >
                            player.position
                    )
                    .sort(
                        (a, b) =>
                            a.position -
                            b.position
                    )[0];

            if (ahead) {

                const temporary =
                    player.position;

                player.position =
                    ahead.position;

                ahead.position =
                    temporary;
            }
        }
    },

    {
        text: "¡Repite el turno!",

        execute(player) {

            pendingAction = "repeat";
        }
    }
];

function executeWildcard() {

    const player =
        players[currentPlayerIndex];

    const action =
        wildcardActions[
            Math.floor(
                Math.random() *
                wildcardActions.length
            )
        ];

    pendingAction = null;

    action.execute(player);

    DOM.wildcardText.textContent =
        action.text;

    DOM.wildcardModal.classList.remove(
        "hidden"
    );

    updateGameUI();
}

function finishWildcard() {

    DOM.wildcardModal.classList.add(
        "hidden"
    );

    if (pendingAction === "repeat") {

        pendingAction = null;

        /*
           El jugador conserva su turno.
        */

        turnLocked = false;

        DOM.dice.textContent = "?";

        DOM.diceMessage.textContent =
            "¡Repite tu turno!";

        DOM.btnRoll.disabled = false;

        updateGameUI();

        announce(
            `${players[currentPlayerIndex].name} repite su turno.`
        );

        return;
    }

    finishTurn();
}

/* =========================================================
   UTILIDADES
   ========================================================= */

let toastTimer = null;

function announce(message) {

    clearTimeout(toastTimer);

    DOM.toast.textContent =
        message;

    DOM.toast.classList.add(
        "show"
    );

    toastTimer =
        setTimeout(() => {

            DOM.toast.classList.remove(
                "show"
            );

        }, 2600);
}

/* =========================================================
   REINICIAR
   ========================================================= */

function resetGame() {

    players = [];

    currentPlayerIndex = 0;

    round = 1;

    selectedAnswer = null;
    currentQuestion = null;
    currentCellType = null;
    pendingAction = null;

    lastQuestionIndex = -1;

    roundTurns = 0;

    gameFinished = false;
    turnLocked = false;

    DOM.dice.textContent = "?";

    DOM.diceMessage.textContent =
        "Pulsa para lanzar";

    DOM.btnRoll.disabled = false;

    DOM.btnCheck.disabled = false;
    DOM.btnContinue.disabled = true;

    DOM.wildcardModal.classList.add(
        "hidden"
    );
}

/* =========================================================
   VALIDACIÓN DEL BANCO
   ========================================================= */

function validateQuestionBank() {

    const requiredFields = [
        "category",
        "difficulty",
        "question",
        "options",
        "answer",
        "explanation",
        "points"
    ];

    let valid = true;

    questionBank.forEach(
        (question, index) => {

            requiredFields.forEach(
                field => {

                    if (
                        question[field] ===
                            undefined ||
                        question[field] ===
                            null
                    ) {

                        console.error(
                            `Pregunta ${
                                index + 1
                            }: falta el campo ${field}.`
                        );

                        valid = false;
                    }
                }
            );

            if (
                !Array.isArray(
                    question.options
                ) ||
                question.options.length < 2
            ) {

                console.error(
                    `Pregunta ${
                        index + 1
                    }: opciones inválidas.`
                );

                valid = false;
            }

            if (
                !question.options.includes(
                    question.answer
                )
            ) {

                console.error(
                    `Pregunta ${
                        index + 1
                    }: la respuesta correcta no aparece entre las opciones.`
                );

                valid = false;
            }
        }
    );

    if (questionBank.length < 60) {

        console.error(
            `El banco contiene ${
                questionBank.length
            } preguntas. Se requieren al menos 60.`
        );

        valid = false;
    }

    if (valid) {
        console.log(
            `✓ Banco de preguntas validado: ${questionBank.length} preguntas.`
        );
    }

    return valid;
}

validateQuestionBank();

/* =========================================================
   VALIDACIÓN DEL TABLERO
   ========================================================= */

function validateBoard() {

    if (boardPositions.length !== 41) {

        console.error(
            `El tablero debe tener 41 posiciones incluyendo SALIDA y META. Tiene ${boardPositions.length}.`
        );
    }

    if (
        boardPositions[0].type !==
        "start"
    ) {

        console.error(
            "La posición 0 debe ser SALIDA."
        );
    }

    if (
        boardPositions[40].type !==
        "meta"
    ) {

        console.error(
            "La posición 40 debe ser META."
        );
    }
}

validateBoard();

/* =========================================================
   FIN DEL SCRIPT
   ========================================================= */
