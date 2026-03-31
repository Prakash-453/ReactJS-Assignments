import React, { useState, useEffect } from "react";
import "./Hi.css";

const symbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"];
const shuffledSymbols = [...symbols, ...symbols].sort(() => Math.random() - 0.5);

function Card({ symbol, isFlipped, onClick }) {
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={onClick}>
      <div className="inner">
        <div className="front">
          <img src={`/images/${symbol}.png`} alt={symbol} />
        </div>
        <div className="back"></div>
      </div>
    </div>
  );
}

function FlipCardGame() {
  const [cards, setCards] = useState(
    shuffledSymbols.map((symbol, index) => ({ id: index, symbol, isFlipped: false, matched: false }))
  );
  const [flippedCards, setFlippedCards] = useState([]);
  const [scores, setScores] = useState({ player1: 0, player2: 0 });
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (cards[first].symbol === cards[second].symbol) {
        setCards((prev) => prev.map((card, index) => index === first || index === second ? { ...card, matched: true } : card));
        setScores((prev) => ({ ...prev, [`player${currentPlayer}`]: prev[`player${currentPlayer}`] + 1 }));
      }
      setTimeout(() => {
        setCards((prev) => prev.map((card, index) => index === first || index === second ? { ...card, isFlipped: card.matched } : card));
        setFlippedCards([]);
        setCurrentPlayer((prev) => (prev === 1 ? 2 : 1));
      }, 1000);
    }
  }, [flippedCards, cards, currentPlayer]);

  useEffect(() => {
    if (cards.every(card => card.matched)) {
      setGameOver(true);
    }
  }, [cards]);

  const handleCardClick = (index) => {
    if (flippedCards.length < 2 && !cards[index].isFlipped) {
      setCards((prev) => prev.map((card, i) => i === index ? { ...card, isFlipped: true } : card));
      setFlippedCards((prev) => [...prev, index]);
    }
  };

  const restartGame = () => {
    const shuffled = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
    setCards(shuffled.map((symbol, index) => ({ id: index, symbol, isFlipped: false, matched: false })));
    setScores({ player1: 0, player2: 0 });
    setCurrentPlayer(1);
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <h1>Flip Card Match Game</h1>
      <div className="scoreboard">
        <p>Player 1: {scores.player1}</p>
        <p>Player 2: {scores.player2}</p>
        <p>Current Turn: Player {currentPlayer}</p>
      </div>
      <div className="grid">
        {cards.map((card, index) => (
          <Card key={index} symbol={card.symbol} isFlipped={card.isFlipped} onClick={() => handleCardClick(index)} />
        ))}
      </div>
      {gameOver && (
        <div className="game-over">
          <h2>{scores.player1 > scores.player2 ? "Player 1 Wins!" : scores.player1 < scores.player2 ? "Player 2 Wins!" : "It's a Draw!"}</h2>
          <button onClick={restartGame}>Restart Game</button>
        </div>
      )}
    </div>
  );
}

export default FlipCardGame;
