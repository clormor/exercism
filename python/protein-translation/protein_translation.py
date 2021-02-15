def proteins(strand):
    result = []
    cur_position = 0
    strand_list = list(strand)
    while (cur_position < len(strand_list)):
        next_protein_key = parse_protein(strand[
            cur_position : cur_position + 3
        ])
        if (next_protein_key >= 0):
            result.append(PROTEINS[next_protein_key])
        else:
            return result
        cur_position += 3

    return result

def parse_protein(codon):
    return CODON_TO_PROTEIN[codon]

PROTEINS = [
    'Methionine',
    'Phenylalanine',
    'Leucine',
    'Serine',
    'Tyrosine',
    'Cysteine',
    'Tryptophan',
]

CODON_TO_PROTEIN = {
    'AUG' : 0,
    'UUU' : 1,
    'UUC' : 1,
    'UUA' : 2,
    'UUG' : 2,
    'UCU' : 3,
    'UCC' : 3,
    'UCA' : 3,
    'UCG' : 3,
    'UAU' : 4,
    'UAC' : 4,
    'UGU' : 5,
    'UGC' : 5,
    'UGG' : 6,
    'UAA' : -1,
    'UAG' : -1,
    'UGA' : -1,
}
