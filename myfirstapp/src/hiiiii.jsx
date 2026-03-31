import React, { useState, useCallback } from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import './index.css';

export default function App() {
  const [jsonInput, setJsonInput] = useState('');
  const [elements, setElements] = useState([]);
  const [error, setError] = useState('');
  const [searchPath, setSearchPath] = useState('');
  const [matchFound, setMatchFound] = useState(null);

  // Recursive function to convert JSON to nodes/edges for React Flow
  const generateNodes = (data, parentId = null, path = '$') => {
    const nodes = [];
    const edges = [];

    if (typeof data === 'object' && data !== null) {
      Object.entries(data).forEach(([key, value], index) => {
        const id = `${path}.${key}`;
        const label = typeof value === 'object' ? key : `${key}: ${value}`;

        nodes.push({
          id,
          data: { label },
          position: { x: Math.random() * 400, y: Math.random() * 400 },
          style: {
            background: typeof value === 'object' ? '#60a5fa' : '#fbbf24',
            color: 'white',
            padding: 10,
            borderRadius: 8,
            fontSize: 12,
          },
        });

        if (parentId) {
          edges.push({ id: `${parentId}-${id}`, source: parentId, target: id, animated: true });
        }

        if (typeof value === 'object' && value !== null) {
          const child = generateNodes(value, id, `${path}.${key}`);
          nodes.push(...child.nodes);
          edges.push(...child.edges);
        }
      });
    }

    return { nodes, edges };
  };

  const handleVisualize = useCallback(() => {
    try {
      const parsed = JSON.parse(jsonInput);
      const { nodes, edges } = generateNodes(parsed);
      setElements([...nodes, ...edges]);
      setError('');
    } catch (err) {
      setError('Invalid JSON input. Please check your syntax.');
      setElements([]);
    }
  }, [jsonInput]);

  const handleSearch = () => {
    const found = elements.find((el) => el.id === searchPath);
    setMatchFound(!!found);
  };

  return (
    <div className="flex flex-col items-center p-6 gap-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-600">JSON Tree Visualizer</h1>
      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder='Paste your JSON here...'
        className="w-2/3 h-40 p-3 border border-gray-300 rounded-lg focus:outline-blue-400"
      />
      <button
        onClick={handleVisualize}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Visualize
      </button>
      {error && <p className="text-red-500">{error}</p>}

      <div className="flex gap-2 mt-2">
        <input
          type="text"
          placeholder="Search JSON path (e.g. $.user.name)"
          value={searchPath}
          onChange={(e) => setSearchPath(e.target.value)}
          className="border p-2 rounded w-64"
        />
        <button onClick={handleSearch} className="px-4 py-2 bg-green-500 text-white rounded">
          Search
        </button>
      </div>
      {matchFound !== null && (
        <p className={matchFound ? 'text-green-600' : 'text-red-600'}>
          {matchFound ? 'Match found!' : 'No match found.'}
        </p>
      )}

      <div className="w-full h-[600px] bg-white border rounded-lg mt-4">
        <ReactFlow elements={elements} fitView>
          <MiniMap />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
}