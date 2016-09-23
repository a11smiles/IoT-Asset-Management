import { IoTHub }                            from './IoTHub';

export class IBeacon {
    id : string;
    uuid: string;
    major: number;
    minor: number;
    measuredPower: number;
    rssi: number;
    accuracy: number;
    proximity: string;
    EventProcessedUtcTime: string;
    IoTHub: IoTHub;
}

