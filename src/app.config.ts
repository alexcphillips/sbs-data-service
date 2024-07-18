type ServerConfig = {
  port: number;
};

type CacheConfig = {
  username: string;
  password: string;
  host: string;
  port: number;
  resetOnStartup: boolean;
};

type AppConfig = {
  server: ServerConfig;
  cache: CacheConfig;
};

const dynamicConfig: AppConfig = {
  server: {
    port: Number(process.env.SERVER_PORT),
  },
  cache: {
    username: process.env.CACHE_USERNAME,
    password: process.env.CACHE_PASSWORD,
    host: process.env.CACHE_HOST,
    port: Number(process.env.CACHE_PORT),
    resetOnStartup: !!process.env.RESET_ON_STARTUP,
  },
} as const;

const localConfig: AppConfig = {
  server: {
    port: 3000,
  },
  cache: {
    username: "",
    password: "",
    host: "",
    port: 6379,
    resetOnStartup: true,
  },
} as const;

export const appConfig = process.env.NODE_ENV === "prod" ? dynamicConfig : localConfig;
