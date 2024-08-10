import axios from 'axios';

type HealthIndicatorStatus = 'UP' | 'DOWN';

type HealthIndicatorResponse = {
  status: HealthIndicatorStatus;
  components: {
    db: {
      status: HealthIndicatorStatus;
      details: {
        database: string;
        validationQuery: string;
      };
    };
    diskSpace: {
      status: HealthIndicatorStatus;
      details: {
        total: number;
        free: number;
        threshold: number;
        path: string;
        exists: boolean;
      };
    };
    ping: {
      status: HealthIndicatorStatus;
    };
  };
};

export const checkHealth = async () => {
  const response = await axios.get<HealthIndicatorResponse>(
    'http://188.68.247.208:8080/actuator/health',
  );
  return response.data;
};
