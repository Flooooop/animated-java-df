

// Rotate from column-major to row-major order
export function rotateMatrix(matrix: number[]): number[] {
    return [
        -matrix[0], matrix[4], -matrix[8], matrix[12],
        -matrix[1], matrix[5], -matrix[9], matrix[13],
        -matrix[2], matrix[6], -matrix[10], matrix[14],
        -matrix[3], matrix[7], -matrix[11], matrix[15],
    ];
}

export function compressMatrix(matrix: number[]): string {

    const compressed = [];
    for (let i = 0; i < matrix.length; i++) {
        let V = Math.round(matrix[i] * 1000);

        const symmetricModulo = (n: number, m: number) => {
            let remainder = n % m;
            if (remainder >= m / 2) {
                remainder -= m;
            } else if (remainder < -m / 2) {
                remainder += m;
            }
            return remainder;
        };
    
        const x0 = symmetricModulo(V, 128);
    
        let remainingV = (V - x0) / 128;
        const x1 = symmetricModulo(remainingV, 128);
    
        remainingV = (remainingV - x1) / 128;
        const x2 = remainingV;
    
        const b0 = x0 + 64;
        const b1 = x1 + 64;
        const b2 = x2 + 64;

        const str = String.fromCharCode(b0, b1, b2);
        compressed.push(str);
    }

    return compressed.join('');
}


export function createDataBlob(data: Record<string, string[]>) {


}
