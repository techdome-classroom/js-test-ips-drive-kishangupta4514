function longestSubstring(s) {


    // Implementation of longestSubstring function

    var n = s.length; 
    var mx = 0; 
    
    for(var i = 0; i < n; i++) { 
        var visited = new Array(256); 
        for(var j = i; j < n; j++) { 
            
            if (visited[s.charAt(j)] == true) break;
            else { 
                mx = Math.max(mx, j - i + 1); 
                visited[s.charAt(j)] = true; 
            } 
        } 

        visited[s.charAt(i)] = false; 
    } 
    return mx; 
}

module.exports = { longestSubstring };