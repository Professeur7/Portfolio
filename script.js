// function download (){
//     const telecharge = document.getElementById('m');
//     const fichier = {
//         margin: [5, 5, 5, 5],
//         filename: 'CV_Hamidou_DJIRE.pdf',
//         image: { type: "jpeg", quality: 0.98 },
//         html2canvas: { scale: 2 ,
//             useCORS: true,
//             logging: true,
//         },
//         jsPDF: { 
//             unit: 'mm',
//             format: 'a4',
//             orientation: 'portrait',
//         }

//     };
//     html2pdf().set(fichier).from(telecharge).save();

// }
function download() {
    const element = document.getElementById('mon_cv');
    
    if (!element) {
        alert('Élément introuvable avec l’ID "mon_cv"');
        return;
    }

    const options = {
        margin: [5, 5, 5, 5],
        filename: 'CV_Hamidou_DJIRE.pdf',
        image: { 
            type: 'jpeg', 
            quality: 0.98 
        },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            logging: true,
            allowTaint: false, // Mieux de laisser false sauf besoin spécifique
            scrollX: 50,
            scrollY: 70,
        },
        jsPDF: { 
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    };

    html2pdf()
        .set(options)
        .from(element)
        .save()
        .then(() => {
            console.log('PDF généré avec succès');
        })
        .catch((error) => {
            console.error('Erreur lors de la génération du PDF:', error);
            alert('Une erreur est survenue lors de la génération du PDF');
        });
}
document.getElementById('download').addEventListener('click', download);
