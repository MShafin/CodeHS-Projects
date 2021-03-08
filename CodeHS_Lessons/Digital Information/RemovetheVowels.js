/*
 * This program performs a lossy compression algorithm
 * that simply removes all the vowels from the original text.
 * 
 * The compressed text is significantly smaller, because it's removed
 * several characters, but it is impossible to restore the original
 * text, making it a lossy compression.
 *
 * You can see that, although the compressed form is missing some data,
 * you are still able to read the resulting text with a little practice.
 */
 
function start()
{
    var original = readLine("Enter the text you would like to compress: ");
    
    println("=======COMPRESSING=========");
    var compressed = removeVowels(original);
    
    println(compressed);
    println('');
    
    computeSpaceSaved(original, compressed);
}

function computeSpaceSaved(original, compressed) {
    var originalSize = original.length;
    var compressedSize = compressed.length;
    
    var spaceSaved = 1 - compressedSize / originalSize;
    var percentSaved = spaceSaved * 100;
    percentSaved = Math.round(percentSaved * 100) / 100;
    
    println("Original size: " + originalSize);
    println("Compressed size: " + compressedSize);
    println("Percent Compressed: " + percentSaved + "%");
}

// Returns a new String that is the same as the original but without any vowels
function removeVowels(original)
{
    var result = "";
    
    // Loop over the original String of text
    for(var i = 0; i < original.length; i++)
    {
        // Get the current letter
        var letter = original.charAt(i);
        
        // If the current letter is not a vowel, add it to the result
        if(!isVowel(letter))
        {
            result += letter;
        }
    }
    
    // Return the resulting, vowelless text
    return result;
}

// Returns true if the given letter is a vowel, false otherwise
function isVowel(letter)
{
    var vowels = "aeiou";
    return vowels.indexOf(letter) != -1;
}