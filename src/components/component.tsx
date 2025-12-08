import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [businessSpecs, setBusinessSpecs] = useState<BusinessSpec[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<{ data: BusinessSpec[] }>('https://api.example.com/business-specs')
      .then(response => {
        setBusinessSpecs(response.data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch business specs', err);
        setError('An error occurred while fetching the business specifications.');
        setLoading(false);
      });
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      // Handle form submission or focus on next input field
    }
  };

  return (
    <div className={clsx('p-4', isMobile ? 'max-w-sm mx-auto' : 'max-w-screen-lg mx-auto')}>
      {loading && <div>Loading...</div>}
      {error && <div role="alert" aria-live="assertive">{error}</div>}
      {!loading && !error && (
        <>
          <h1 className="text-2xl font-bold mb-4">Business Specifications</h1>
          <ul className="list-disc pl-5">
            {businessSpecs.map(spec => (
              <li key={spec.id} tabIndex={0} onKeyDown={handleKeyDown}>
                <div className="flex items-center justify-between">
                  <span className="text-lg">{spec.name}</span>
                  <button
                    type="button"
                    onClick={() => console.log(`Edit ${spec.name}`)}
                    className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                    aria-label={`Edit ${spec.name}`}
                  >
                    Edit
                  </button>
                </div>
                <p>{spec.description}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [businessSpecs, setBusinessSpecs] = useState<BusinessSpec[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<{ data: BusinessSpec[] }>('https://api.example.com/business-specs')
      .then(response => {
        setBusinessSpecs(response.data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch business specs', err);
        setError('An error occurred while fetching the business specifications.');
        setLoading(false);
      });
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      // Handle form submission or focus on next input field
    }
  };

  return (
    <div className={clsx('p-4', isMobile ? 'max-w-sm mx-auto' : 'max-w-screen-lg mx-auto')}>
      {loading && <div>Loading...</div>}
      {error && <div role="alert" aria-live="assertive">{error}</div>}
      {!loading && !error && (
        <>
          <h1 className="text-2xl font-bold mb-4">Business Specifications</h1>
          <ul className="list-disc pl-5">
            {businessSpecs.map(spec => (
              <li key={spec.id} tabIndex={0} onKeyDown={handleKeyDown}>
                <div className="flex items-center justify-between">
                  <span className="text-lg">{spec.name}</span>
                  <button
                    type="button"
                    onClick={() => console.log(`Edit ${spec.name}`)}
                    className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                    aria-label={`Edit ${spec.name}`}
                  >
                    Edit
                  </button>
                </div>
                <p>{spec.description}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;