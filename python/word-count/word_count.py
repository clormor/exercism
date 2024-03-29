"""Module which counts words in a sentence, or string"""

ascii_a = ord('a')
ascii_0 = ord('0')
ascii_apostrophe = ord('\'')
state = {}


def init_state(sentence):
    """Initialises the state before processing a new sentence.

    :sentence: string - a sentence containing 0 or more words to be counted.
    """
    state.update({
        'in_word': False,
        'apostrophe': False,
        'in_number': False,
        'first_char_in_word': 0,
        'words': {},
        'sentence': sentence.lower()
    })


def is_letter(index):
    """Determines if a character in the current sentence is a letter.

    :index: int - the index of the character to check
    """
    return ascii_a <= ord(state['sentence'][index]) < ascii_a + 26


def is_digit(index):
    """Determines if a character in the current sentence is a digit.

    :index: int - the index of the character to check
    """
    return ascii_0 <= ord(state['sentence'][index]) < ascii_0 + 10


def is_apostrophe(index):
    """Determines if a character in the current sentence is an apostrophe.

    :index: int - the index of the character to check
    """
    return ascii_apostrophe == ord(state['sentence'][index])


def count_words(sentence):
    """Counts the occurences of words in a string.

    :sentence: string - a sentence containing 0 or more words to be counted.
    :return: dict - all the words found, with an associated count.

    Words are normalised to lowercase. A word can either be a sequence of digits,
    a sequence of letters or a sequence of letters that contains a single apostrophe.
    """
    init_state(sentence)
    for i in range(0, len(state['sentence'])):
        if is_letter(i):
            visit_letter(i)
        elif is_digit(i):
            visit_digit(i)
        elif is_apostrophe(i):
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
        state.update({'in_word': True, 'first_char_in_word': index})
    state.update({'in_number': False})


def visit_digit(index):
    """Updates the current state once a digit has been visited.

    :index: int - the index of the digit character in the state's sentence.
    """
    if not state['in_number'] and not state['in_word']:
        state.update({'in_number': True, 'first_char_in_word': index})
    state.update({'in_word': False})


def visit_apostrophe(index):
    """Updates the current state once a apostrophe has been visited.

    :index: int - the index of the apostrophe character in the state's sentence.
    """
    if state['in_word']:
        if index+1 < len(state['sentence']) and (is_letter(index+1)):
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
    word = state['sentence'][state['first_char_in_word']:index+1]
    word_count = state['words'].get(word, 0) + 1
    state['words'].update({word: word_count})
    state.update({'in_word': False, 'in_number': False, 'apostrophe': False})
