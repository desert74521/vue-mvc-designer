import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';

export function  add(a: number , b: number ): number {
    return a + b;
}


export function translatorObjToClass<T>(obj: object, classType: ClassType<T>): T {
    return plainToClass(classType, obj);
}


