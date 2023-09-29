import { OperationType } from "./operation-type";

export const getOperationStr = (type: OperationType, activeNUmber: number): string => {
    switch (type) {
        case OperationType.Div:
            return ' / ';
        case OperationType.Mult:
            return ' * ';
        case OperationType.Sub:
            return ' - ';
        case OperationType.Add:
            return ' + ';
        case OperationType.Root:
            return `sqrt(${activeNUmber})`;
        case OperationType.Deg:
            return `pow(${activeNUmber}, 2)`;
    }
}

export const isSkeepActiveNumber = (type: OperationType) => {
    switch (type) {
        case OperationType.Root:
        case OperationType.Deg:
            return true;
        default: return false;
    }
}

export const executeOpration = (oper: OperationType, a: number, b: number): number => {
    switch (oper) {
        case OperationType.Div:
            return a / b;
        case OperationType.Mult:
            return a * b;
        case OperationType.Sub:
            return a - b;
        case OperationType.Add:
            return a + b;
        case OperationType.Root:
            return Math.sqrt(a);
        case OperationType.Deg:
            return Math.pow(a, 2);
    }
}