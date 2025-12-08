import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Typography, TextField, Button, CircularProgress, Box, Grid } from '@mui/material';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  contentTypes: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec>({
    id: '',
    name: '',
    description: '',
    contentTypes: []
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessSpec({
      ...businessSpec,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post('/api/business-spec', businessSpec);
      // Handle success, e.g., reset form or navigate to a new page
    } catch (err) {
      setError('Failed to create the business specification.');
    }

    setLoading(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="name"
            required
            fullWidth
            id="business-name"
            label="Business Name"
            value={businessSpec.name}
            onChange={handleInputChange}
            aria-label="Enter business name"
            autoComplete="off"
            autoFocus
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            required
            fullWidth
            id="business-description"
            label="Description"
            value={businessSpec.description}
            onChange={handleInputChange}
            aria-label="Enter business description"
            autoComplete="off"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="contentTypes"
            required
            fullWidth
            id="content-types"
            label="Content Types (comma separated)"
            value={businessSpec.contentTypes.join(',')}
            onChange={(e) => setBusinessSpec({
              ...businessSpec,
              contentTypes: e.target.value.split(',').map(s => s.trim())
            })}
            aria-label="Enter content types"
            autoComplete="off"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={loading}
        aria-label="Create business specification"
      >
        {loading ? <CircularProgress size={24} /> : 'Create'}
      </Button>

      {error && (
        <Typography component="p" color="red">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Typography, TextField, Button, CircularProgress, Box, Grid } from '@mui/material';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  contentTypes: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec>({
    id: '',
    name: '',
    description: '',
    contentTypes: []
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessSpec({
      ...businessSpec,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post('/api/business-spec', businessSpec);
      // Handle success, e.g., reset form or navigate to a new page
    } catch (err) {
      setError('Failed to create the business specification.');
    }

    setLoading(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="name"
            required
            fullWidth
            id="business-name"
            label="Business Name"
            value={businessSpec.name}
            onChange={handleInputChange}
            aria-label="Enter business name"
            autoComplete="off"
            autoFocus
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            required
            fullWidth
            id="business-description"
            label="Description"
            value={businessSpec.description}
            onChange={handleInputChange}
            aria-label="Enter business description"
            autoComplete="off"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="contentTypes"
            required
            fullWidth
            id="content-types"
            label="Content Types (comma separated)"
            value={businessSpec.contentTypes.join(',')}
            onChange={(e) => setBusinessSpec({
              ...businessSpec,
              contentTypes: e.target.value.split(',').map(s => s.trim())
            })}
            aria-label="Enter content types"
            autoComplete="off"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={loading}
        aria-label="Create business specification"
      >
        {loading ? <CircularProgress size={24} /> : 'Create'}
      </Button>

      {error && (
        <Typography component="p" color="red">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default CreateBusinessSpecification;