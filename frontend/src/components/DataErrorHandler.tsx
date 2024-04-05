import { ResponseResult } from "@/libs/api/types";

interface DataErrorHandlerProps {
  result: ResponseResult<unknown>;
  dataType: string;
}

export const DataErrorHandler: React.FC<DataErrorHandlerProps> = ({ result, dataType }) => {
  if (result.serverError || !result.dataResult) {
    console.error(`Failed to fetch ${dataType}: `, result.serverError || "data is empty");
    return <div>{`Failed to fetch ${dataType}`}</div>;
  }

  return null;
};
