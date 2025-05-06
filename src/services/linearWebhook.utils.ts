export const getRequiredEnvVars = () => {
  const fullName = process.env.FULL_NAME;
  const estimationPointInMinutesRaw = process.env.ESTIMATION_POINT_IN_MINUTES;

  if (!fullName || !estimationPointInMinutesRaw) {
    console.error(
      "Missing critical environment variables: FULL_NAME or ESTIMATION_POINT_IN_MINUTES"
    );
    throw new Error(
      "Server configuration error: Missing required environment variables."
    );
  }
  const estimationPointInMinutes = Number(estimationPointInMinutesRaw);
  if (isNaN(estimationPointInMinutes)) {
    console.error(
      "Invalid environment variable: ESTIMATION_POINT_IN_MINUTES is not a number"
    );
    throw new Error(
      "Server configuration error: Invalid ESTIMATION_POINT_IN_MINUTES."
    );
  }

  return { fullName, estimationPointInMinutes };
};

export const determineTimeProfileId = (
  clientPrefix: string | undefined,
  env: NodeJS.ProcessEnv = process.env // Default to global process.env if not provided
): number | undefined => {
  let timeProfileIdString: string | undefined;

  if (clientPrefix) {
    const clientSpecificVarName = `C${clientPrefix}_TIMEPROFILEID`;
    timeProfileIdString = env[clientSpecificVarName];
  } else {
    const defaultTimeProfileIdKey = env.DEFAULT_TIMEPROFILEID;
    if (defaultTimeProfileIdKey) {
      timeProfileIdString = env[defaultTimeProfileIdKey];
    }
  }

  const timeProfileId = timeProfileIdString
    ? Number(timeProfileIdString)
    : undefined;
  if (timeProfileIdString && isNaN(timeProfileId!)) {
    console.warn(
      `[determineTimeProfileId] Expected a number for TimeProfileID from env var, but got: ${timeProfileIdString}. Will be treated as undefined.`
    );
    return undefined;
  }
  return timeProfileId;
};
