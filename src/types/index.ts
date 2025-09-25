export interface RollerShutterStatus {
    isOpen: boolean;
    position: number; // Position in percentage (0-100)
}

export interface Statistics {
    energySavings: number; // in kWh
    usageTime: number; // in hours
    operationalStatus: string; // e.g., "Operational", "Maintenance Required"
}