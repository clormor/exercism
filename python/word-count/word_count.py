"""Module which counts words in a sentence, or string"""

asciiA = ord('a')
ascii0 = ord('0')
asciiApostrophe = ord('\'')
state = {}


def init_state(sentence):
    """Initialises the state before processing a new sentence.

    :sentence: string - a sentence containing 0 or more words to be counted.
    """
    state.update({
        'in_word': False,
        'apostrophe': False,
        'in_number': False,
        'first_char': 0,
        'words': {},
        'sentence': sentence.lower()
    })


def count_words(sentence):
    """Counts the occurences of words in a string.

    :sentence: string - a sentence containing 0 or more words to be counted.
    :return: dict - all the words found, with an associated count.

    Words are normalised to lowercase. A word can either be a sequence of digits,
    a sequence of letters or a sequence of letters that contains a single apostrophe.
    """

    init_state(sentence)
    for i, next_char in enumerate(state['sentence']):
        if asciiA <= ord(next_char) < asciiA + 26:
            visit_letter(i)
        elif ascii0 <= ord(next_char) < ascii0 + 10:
            visit_digit(i)
        elif ord(next_char) == asciiApostrophe:
            visit_apostrophe(i)
        else:
            visit_non_word(i)
    if state['in_word'] or state['in_number']:
        add_word(i)
    return state['words']


def visit_letter(index):
    """Updates the current state once a letter has been visited.

    :index: int - the index of the letter character in the state's sentence.
    """
    if not state['in_number'] and not state['in_word']:
        state.update({'in_word': True, 'first_char': index})
    state.update({'in_number': False})


def visit_digit(index):
    """Updates the current state once a digit has been visited.

    :index: int - the index of the digit character in the state's sentence.
    """
    if not state['in_number'] and not state['in_word']:
        state.update({'in_number': True, 'first_char': index})
    state.update({'in_word': False})


def visit_apostrophe(index):
    """Updates the current state once a apostrophe has been visited.

    :index: int - the index of the apostrophe character in the state's sentence.
    """
    if state['in_word']:
        if state['apostrophe']:
            state.update({'in_word': False, 'apostrophe': False})
        else:
            if index+1 < len(state['sentence']) and (asciiA < ord(state['sentence'][index+1]) or ord(state['sentence'][index+1]) > asciiA + 26):
                state.update({'apostrophe': True})
            else:
                add_word(index-1)


def visit_non_word(index):
    """Updates the current state once a non-word character has been visited.

    :index: int - the index of the non-word character in the state's sentence.
    """
    if state['in_word'] or state['in_number']:
        add_word(index-1)
    else:
        state.update({'in_word': False, 'in_number': False, 'apostrophe': False})


def add_word(index):
    """Updates the word count with a newly-found word.

    :index: int - the index of the last character of the newly-found word.
    """
    word = state['sentence'][state['first_char']:index+1]
    word_count = state['words'].get(word, 0) + 1
    state['words'].update({word: word_count})
    state.update({'in_word': False, 'in_number': False, 'apostrophe': False})