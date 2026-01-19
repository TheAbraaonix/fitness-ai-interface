export interface ApiResponse<T> {
  success: true;
  code: string;
  message: string;
  data: T;
  timestamp: string;
}