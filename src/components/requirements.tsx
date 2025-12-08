import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { LoadingButton } from '@mui/lab';
import { TextField, Button, Box, CircularProgress, Typography } from '@mui/material';

interface Requirement {
  id: number;
  name: string;
  description: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [newRequirementName, setNewRequirementName] = useState('');
  const [newRequirementDescription, setNewRequirementDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('https://api.example.com/requirements');
      setRequirements(response.data);
    } catch (err) {
      setError('Failed to load requirements.');
    } finally {
      setLoading(false);
    }
  };

  const addRequirement = async () => {
    try {
      if (!newRequirementName.trim() || !newRequirementDescription.trim()) return;
      setLoading(true);
      await axios.post<Requirement>('https://api.example.com/requirements', {
        name: newRequirementName,
        description: newRequirementDescription
      });
      setNewRequirementName('');
      setNewRequirementDescription('');
      fetchRequirements();
    } catch (err) {
      setError('Failed to add requirement.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      {error && <Typography variant="body1" color="error">{error}</Typography>}
      <TextField
        label="Requirement Name"
        value={newRequirementName}
        onChange={(e) => setNewRequirementName(e.target.value)}
        fullWidth
        margin="normal"
        aria-label="Enter requirement name"
      />
      <TextField
        label="Description"
        value={newRequirementDescription}
        onChange={(e) => setNewRequirementDescription(e.target.value)}
        fullWidth
        multiline
        rows={4}
        margin="normal"
        aria-label="Enter description"
      />
      <LoadingButton
        loading={loading}
        onClick={addRequirement}
        variant="contained"
        color="primary"
        disabled={!newRequirementName.trim() || !newRequirementDescription.trim()}
        aria-label="Add requirement"
      >
        Add Requirement
      </LoadingButton>
      {requirements.length > 0 && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" component="div">
            Requirements
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {requirements.map((requirement) => (
              <li key={requirement.id} className={clsx('py-2 px-4 border-b', { 'bg-gray-100': requirement.id % 2 === 0 })}>
                <Typography variant="body1">
                  {requirement.name}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {requirement.description}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { LoadingButton } from '@mui/lab';
import { TextField, Button, Box, CircularProgress, Typography } from '@mui/material';

interface Requirement {
  id: number;
  name: string;
  description: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [newRequirementName, setNewRequirementName] = useState('');
  const [newRequirementDescription, setNewRequirementDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('https://api.example.com/requirements');
      setRequirements(response.data);
    } catch (err) {
      setError('Failed to load requirements.');
    } finally {
      setLoading(false);
    }
  };

  const addRequirement = async () => {
    try {
      if (!newRequirementName.trim() || !newRequirementDescription.trim()) return;
      setLoading(true);
      await axios.post<Requirement>('https://api.example.com/requirements', {
        name: newRequirementName,
        description: newRequirementDescription
      });
      setNewRequirementName('');
      setNewRequirementDescription('');
      fetchRequirements();
    } catch (err) {
      setError('Failed to add requirement.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      {error && <Typography variant="body1" color="error">{error}</Typography>}
      <TextField
        label="Requirement Name"
        value={newRequirementName}
        onChange={(e) => setNewRequirementName(e.target.value)}
        fullWidth
        margin="normal"
        aria-label="Enter requirement name"
      />
      <TextField
        label="Description"
        value={newRequirementDescription}
        onChange={(e) => setNewRequirementDescription(e.target.value)}
        fullWidth
        multiline
        rows={4}
        margin="normal"
        aria-label="Enter description"
      />
      <LoadingButton
        loading={loading}
        onClick={addRequirement}
        variant="contained"
        color="primary"
        disabled={!newRequirementName.trim() || !newRequirementDescription.trim()}
        aria-label="Add requirement"
      >
        Add Requirement
      </LoadingButton>
      {requirements.length > 0 && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" component="div">
            Requirements
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {requirements.map((requirement) => (
              <li key={requirement.id} className={clsx('py-2 px-4 border-b', { 'bg-gray-100': requirement.id % 2 === 0 })}>
                <Typography variant="body1">
                  {requirement.name}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {requirement.description}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default GatherRequirements;