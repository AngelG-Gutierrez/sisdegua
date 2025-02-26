import { ProbabilityData } from "../entities/probabilityData";

export class ProbabilityService {
    private probabilityData: ProbabilityData;

    constructor() {
        this.probabilityData = new ProbabilityData();
    }

    async getFormattedData() {
        const sensorData = await this.probabilityData.getSensorData();

        return sensorData.map(data => ({
            date: data.date.toLocaleTimeString(), 
            waterLevel: data.waterLevel, 
            rainLevel: data.rainLevel,
            rainIntensity: data.rainIntensity,  
            waterProbability:data.waterProbability,
        }));
    }

    async getFormattedDataReal() {
        const sensorData = await this.probabilityData.getSensorDataReal();

        return sensorData.map(data => ({
            date: data.date.toLocaleTimeString(), 
            waterLevel: data.waterLevel, 
            rainLevel: data.rainLevel,
            rainIntensity: data.rainIntensity,  
            waterProbability:data.waterProbability,
        }));
    }
}