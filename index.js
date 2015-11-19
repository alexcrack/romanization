
var chars =     "а,б,в,г,д,е,ё,ж,з,и,й,к,л,м,н,о,п,р,с,т,у,ф,х,ц,ч,ш,щ,ъ,ы,ь,э,ю,я,А,Б,В,Г,Д,Е,Ё,Ж,З,И,Й,К,Л,М,Н,О,П,Р,С,Т,У,Ф,Х,Ц,Ч,Ш,Щ,Ъ,Ы,Ь,Э,Ю,Я,Ĳ,Ö,Œ,Ü,ä,æ,ĳ,ö,œ,ü,ß,ſ,À,Á,Â,Ã,Ä,Å,Æ,Ā,Ą,Ă,Ç,Ć,Č,Ĉ,Ċ,Ď,Đ,È,É,Ê,Ë,Ē,Ę,Ě,Ĕ,Ė,Ĝ,Ğ,Ġ,Ģ,Ĥ,Ħ,Ì,Í,Î,Ï,Ī,Ĩ,Ĭ,Į,İ,Ĵ,Ķ,Ľ,Ĺ,Ļ,Ŀ,Ł,Ñ,Ń,Ň,Ņ,Ŋ,Ò,Ó,Ô,Õ,Ø,Ō,Ő,Ŏ,Ŕ,Ř,Ŗ,Ś,Ş,Ŝ,Ș,Š,Ť,Ţ,Ŧ,Ț,Ù,Ú,Û,Ū,Ů,Ű,Ŭ,Ũ,Ų,Ŵ,Ŷ,Ÿ,Ý,Ź,Ż,Ž,à,á,â,ã,ā,ą,ă,å,ç,ć,č,ĉ,ċ,ď,đ,è,é,ê,ë,ē,ę,ě,ĕ,ė,ƒ,ĝ,ğ,ġ,ģ,ĥ,ħ,ì,í,î,ï,ī,ĩ,ĭ,į,ı,ĵ,ķ,ĸ,ł,ľ,ĺ,ļ,ŀ,ñ,ń,ň,ņ,ŉ,ŋ,ò,ó,ô,õ,ø,ō,ő,ŏ,ŕ,ř,ŗ,ś,ş,š,ť,ù,ú,û,ū,ů,ű,ŭ,ũ,ų,ŵ,ÿ,ý,ŷ,ż,ź,ž,Α,Ά,Ἀ,Ἁ,Ἂ,Ἃ,Ἄ,Ἅ,Ἆ,Ἇ,ᾈ,ᾉ,ᾊ,ᾋ,ᾌ,ᾍ,ᾎ,ᾏ,Ᾰ,Ᾱ,Ὰ,ᾼ,Β,Γ,Δ,Ε,Έ,Ἐ,Ἑ,Ἒ,Ἓ,Ἔ,Ἕ,Ὲ,Ζ,Η,Ή,Ἠ,Ἡ,Ἢ,Ἣ,Ἤ,Ἥ,Ἦ,Ἧ,ᾘ,ᾙ,ᾚ,ᾛ,ᾜ,ᾝ,ᾞ,ᾟ,Ὴ,ῌ,Θ,Ι,Ί,Ϊ,Ἰ,Ἱ,Ἲ,Ἳ,Ἴ,Ἵ,Ἶ,Ἷ,Ῐ,Ῑ,Ὶ,Κ,Λ,Μ,Ν,Ξ,Ο,Ό,Ὀ,Ὁ,Ὂ,Ὃ,Ὄ,Ὅ,Ὸ,Π,Ρ,Ῥ,Σ,Τ,Υ,Ύ,Ϋ,Ὑ,Ὓ,Ὕ,Ὗ,Ῠ,Ῡ,Ὺ,Φ,Χ,Ψ,Ω,Ώ,Ὠ,Ὡ,Ὢ,Ὣ,Ὤ,Ὥ,Ὦ,Ὧ,ᾨ,ᾩ,ᾪ,ᾫ,ᾬ,ᾭ,ᾮ,ᾯ,Ὼ,ῼ,α,ά,ἀ,ἁ,ἂ,ἃ,ἄ,ἅ,ἆ,ἇ,ᾀ,ᾁ,ᾂ,ᾃ,ᾄ,ᾅ,ᾆ,ᾇ,ὰ,ᾰ,ᾱ,ᾲ,ᾳ,ᾴ,ᾶ,ᾷ,β,γ,δ,ε,έ,ἐ,ἑ,ἒ,ἓ,ἔ,ἕ,ὲ,ζ,η,ή,ἠ,ἡ,ἢ,ἣ,ἤ,ἥ,ἦ,ἧ,ᾐ,ᾑ,ᾒ,ᾓ,ᾔ,ᾕ,ᾖ,ᾗ,ὴ,ῂ,ῃ,ῄ,ῆ,ῇ,θ,ι,ί,ϊ,ΐ,ἰ,ἱ,ἲ,ἳ,ἴ,ἵ,ἶ,ἷ,ὶ,ῐ,ῑ,ῒ,ῖ,ῗ,κ,λ,μ,ν,ξ,ο,ό,ὀ,ὁ,ὂ,ὃ,ὄ,ὅ,ὸ,π,ρ,ῤ,ῥ,σ,ς,τ,υ,ύ,ϋ,ΰ,ὐ,ὑ,ὒ,ὓ,ὔ,ὕ,ὖ,ὗ,ὺ,ῠ,ῡ,ῢ,ῦ,ῧ,φ,χ,ψ,ω,ώ,ὠ,ὡ,ὢ,ὣ,ὤ,ὥ,ὦ,ὧ,ᾠ,ᾡ,ᾢ,ᾣ,ᾤ,ᾥ,ᾦ,ᾧ,ὼ,ῲ,ῳ,ῴ,ῶ,ῷ,ð,Ð,þ,Þ,ა,ბ,გ,დ,ე,ვ,ზ,თ,ი,კ,ლ,მ,ნ,ო,პ,ჟ,რ,ს,ტ,უ,ფ,ქ,ღ,ყ,შ,ჩ,ც,ძ,წ,ჭ,ხ,ჯ,ჰ".split(",");
var chars_lat = "a,b,v,g,d,e,yo,zh,z,i,y,k,l,m,n,o,p,r,s,t,u,f,h,ts,ch,sh,sch,',y,',e,yu,ya,A,B,V,G,D,E,Yo,Zh,Z,I,Y,K,L,M,N,O,P,R,S,T,U,F,H,Ts,Ch,Sh,Sch,',Y,',E,Yu,Ya,IJ,O,O,U,ae,ae,ij,o,oe,u,ss,ss,A,A,A,A,A,A,AE,A,A,A,C,C,C,C,C,D,D,E,E,E,E,E,E,E,E,E,G,G,G,G,H,H,I,I,I,I,I,I,I,I,I,J,K,K,K,K,K,L,N,N,N,N,N,O,O,O,O,O,O,O,O,R,R,R,S,S,S,S,S,T,T,T,T,U,U,U,U,U,U,U,U,U,W,Y,Y,Y,Z,Z,Z,a,a,a,a,a,a,a,a,c,c,c,c,c,d,d,e,e,e,e,e,e,e,e,e,f,g,g,g,g,h,h,i,i,i,i,i,i,i,i,i,j,k,k,l,l,l,l,l,n,n,n,n,n,n,o,o,o,o,o,o,o,o,r,r,r,s,s,s,t,u,u,u,u,u,u,u,u,u,w,y,y,y,z,z,z,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,B,G,D,E,E,E,E,E,E,E,E,E,Z,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,T,I,I,I,I,I,I,I,I,I,I,I,I,I,I,K,L,M,N,K,O,O,O,O,O,O,O,O,O,P,R,R,S,T,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,F,X,P,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,b,g,d,e,e,e,e,e,e,e,e,e,z,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,t,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,k,l,m,n,k,o,o,o,o,o,o,o,o,o,p,r,r,r,s,s,t,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,y,f,x,p,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,d,D,t,T,a,b,g,d,e,v,z,t,i,k,l,m,n,o,p,z,r,s,t,u,p,k,g,q,s,c,t,d,t,c,k,j,h".split(",");

var map = {};
for(var i = 0; i < chars.length; i++) map[chars[i]] = chars_lat[i];

function romanize(str) {
    if(!str) return "";
    var new_str = "", char, substitute;
    for(var i = 0; i < str.length; i++) {
        char = str[i];
        substitute = map[char];
        new_str += substitute ? substitute : char;
    }
    return new_str;
}

module.exports = romanize;