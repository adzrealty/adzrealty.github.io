// Philippine National Officials Qualifications Application

// Data from the provided JSON
const positionsData = {
  "positions": [
    {
      "position": "President",
      "branch": "Executive",
      "citizenship": "Natural-born citizen of the Philippines",
      "age": "At least 40 years old on the day of election",
      "educational_professional": "Able to read and write",
      "residency": "Resident of the Philippines for at least 10 years immediately preceding the election",
      "other_requirements": "Must be a registered voter",
      "term": "6 years with no reelection",
      "legal_basis": "Article VII, Section 2 of the 1987 Constitution"
    },
    {
      "position": "Vice-President",
      "branch": "Executive",
      "citizenship": "Natural-born citizen of the Philippines",
      "age": "At least 40 years old on the day of election",
      "educational_professional": "Able to read and write",
      "residency": "Resident of the Philippines for at least 10 years immediately preceding the election",
      "other_requirements": "Must be a registered voter",
      "term": "6 years, with reelection but not more than two successive terms",
      "legal_basis": "Article VII, Section 3 of the 1987 Constitution"
    },
    {
      "position": "Cabinet Secretary",
      "branch": "Executive",
      "citizenship": "Varies (Typically Natural-born by practice)",
      "age": "No specific requirement",
      "educational_professional": "Varies by department",
      "residency": "No specific requirement",
      "other_requirements": "Appointed by the President with confirmation by the Commission on Appointments",
      "legal_basis": "Article VII, Section 16 of the 1987 Constitution"
    },
    {
      "position": "Executive Secretary",
      "branch": "Executive",
      "citizenship": "Varies (Typically Natural-born by practice)",
      "age": "No specific requirement",
      "educational_professional": "Varies",
      "residency": "No specific requirement",
      "other_requirements": "Appointed by the President with confirmation by the Commission on Appointments",
      "legal_basis": "Article VII, Section 16 of the 1987 Constitution"
    },
    {
      "position": "Solicitor General",
      "branch": "Executive",
      "citizenship": "Filipino citizen",
      "age": "No specific requirement",
      "educational_professional": "Member of Philippine Bar, at least 4 years legal practice",
      "residency": "No specific requirement",
      "other_requirements": "Appointed by the President",
      "legal_basis": "Various statutes"
    },
    {
      "position": "Senator",
      "branch": "Legislative",
      "citizenship": "Natural-born citizen of the Philippines",
      "age": "At least 35 years old on the day of election",
      "educational_professional": "Able to read and write",
      "residency": "Resident of the Philippines for not less than 2 years immediately preceding the election",
      "other_requirements": "Must be a registered voter",
      "term": "6 years, with reelection but not more than 2 consecutive terms",
      "legal_basis": "Article VI, Section 3 of the 1987 Constitution"
    },
    {
      "position": "Member of the House of Representatives",
      "branch": "Legislative",
      "citizenship": "Natural-born citizen of the Philippines",
      "age": "At least 25 years old on the day of election",
      "educational_professional": "Able to read and write",
      "residency": "Resident of the district for not less than 1 year immediately preceding the election",
      "other_requirements": "Must be a registered voter in the district",
      "term": "3 years, not more than 3 consecutive terms",
      "legal_basis": "Article VI, Section 6 of the 1987 Constitution"
    },
    {
      "position": "Party-List Representative",
      "branch": "Legislative",
      "citizenship": "Natural-born citizen of the Philippines",
      "age": "At least 25 years old on the day of election",
      "educational_professional": "Able to read and write",
      "residency": "Resident of the Philippines for not less than 1 year immediately preceding the election",
      "other_requirements": "Must be a registered voter, may need to be a member of the sector they represent",
      "term": "3 years, not more than 3 consecutive terms",
      "legal_basis": "Article VI, Section 6 of the 1987 Constitution and RA 7941"
    },
    {
      "position": "Supreme Court Justice",
      "branch": "Judicial",
      "citizenship": "Natural-born citizen of the Philippines",
      "age": "At least 40 years old at appointment",
      "educational_professional": "At least 15 years as judge or engaged in law practice in the Philippines",
      "residency": "No specific requirement",
      "other_requirements": "Proven competence, integrity, probity, and independence",
      "legal_basis": "Article VIII, Section 7(1) of the 1987 Constitution"
    },
    {
      "position": "Court of Appeals Justice",
      "branch": "Judicial",
      "citizenship": "Natural-born citizen of the Philippines",
      "age": "At least 40 years old at appointment",
      "educational_professional": "Same qualifications as those for Supreme Court",
      "residency": "No specific requirement",
      "other_requirements": "Proven competence, integrity, probity, and independence",
      "legal_basis": "Relevant statutes and Article VIII, Section 7(1) of the 1987 Constitution"
    },
    {
      "position": "Sandiganbayan Justice",
      "branch": "Judicial",
      "citizenship": "Natural-born citizen of the Philippines",
      "age": "At least 40 years old at appointment",
      "educational_professional": "For at least 10 years, has been a judge of a court of record or engaged in law practice in the Philippines",
      "residency": "No specific requirement",
      "other_requirements": "Proven competence, integrity, probity, and independence",
      "legal_basis": "Presidential Decree No. 1606"
    },
    {
      "position": "Court of Tax Appeals Justice",
      "branch": "Judicial",
      "citizenship": "Natural-born citizen of the Philippines",
      "age": "At least 40 years old at appointment",
      "educational_professional": "Same as Court of Appeals",
      "residency": "No specific requirement",
      "other_requirements": "Proven competence, integrity, probity, and independence",
      "legal_basis": "Relevant statutes"
    },
    {
      "position": "Ombudsman",
      "branch": "Constitutional",
      "citizenship": "Natural-born citizen of the Philippines",
      "age": "At least 40 years old at appointment",
      "educational_professional": "For at least 10 years, has been a judge or engaged in law practice in the Philippines; member of Philippine Bar",
      "residency": "No specific requirement",
      "other_requirements": "Must be of recognized probity and independence; must not have been a candidate for any elective office in the immediately preceding election",
      "term": "7 years without reappointment",
      "legal_basis": "Article XI, Section 8 of the 1987 Constitution; RA 6770"
    },
    {
      "position": "Deputy Ombudsman",
      "branch": "Constitutional",
      "citizenship": "Natural-born citizen of the Philippines",
      "age": "At least 40 years old at appointment",
      "educational_professional": "Member of Philippine Bar",
      "residency": "No specific requirement",
      "other_requirements": "Must be of recognized probity and independence; must not have been a candidate for any elective office in the immediately preceding election",
      "term": "7 years without reappointment",
      "legal_basis": "Article XI, Section 8 of the 1987 Constitution; RA 6770"
    },
    {
      "position": "Civil Service Commission (Chair/Commissioner)",
      "branch": "Constitutional",
      "citizenship": "Natural-born citizen of the Philippines",
      "age": "At least 35 years old at appointment",
      "educational_professional": "With proven capacity for public administration",
      "residency": "No specific requirement",
      "other_requirements": "Must not have been a candidate for any elective position in the immediately preceding election",
      "term": "7 years without reappointment",
      "legal_basis": "Article IX-B, Section 1(1) of the 1987 Constitution"
    },
    {
      "position": "Commission on Elections (Chair/Commissioner)",
      "branch": "Constitutional",
      "citizenship": "Natural-born citizen of the Philippines",
      "age": "At least 35 years old at appointment",
      "educational_professional": "Majority must be members of the Philippine Bar who have been engaged in the practice of law for at least 10 years",
      "residency": "No specific requirement",
      "other_requirements": "Must not have been a candidate for any elective position in the immediately preceding election",
      "term": "7 years without reappointment",
      "legal_basis": "Article IX-C, Section 1(1) of the 1987 Constitution"
    },
    {
      "position": "Commission on Audit (Chair/Commissioner)",
      "branch": "Constitutional",
      "citizenship": "Natural-born citizen of the Philippines",
      "age": "At least 35 years old at appointment",
      "educational_professional": "Holder of a college degree (CPA), or members of the Philippine Bar who have been engaged in the practice of law for at least 10 years",
      "residency": "No specific requirement",
      "other_requirements": "Must not have been a candidate for any elective position in the immediately preceding election",
      "term": "7 years without reappointment",
      "legal_basis": "Article IX-D, Section 1(1) of the 1987 Constitution"
    }
  ]
};

// Application state
let currentFilter = 'all';
let searchQuery = '';
let selectedPositions = new Set();
let filteredPositions = [...positionsData.positions];

// DOM elements
document.addEventListener('DOMContentLoaded', function() {
    const welcomeSection = document.getElementById('welcomeSection');
    const searchSection = document.getElementById('searchSection');
    const mainContent = document.getElementById('mainContent');
    const positionsGrid = document.getElementById('positionsGrid');
    const searchInput = document.getElementById('searchInput');
    const compareBtn = document.getElementById('compareBtn');
    const clearBtn = document.getElementById('clearBtn');
    const comparisonModal = document.getElementById('comparisonModal');
    const aboutModal = document.getElementById('aboutModal');
    const navBtns = document.querySelectorAll('.nav-btn');
    const exploreBtn = document.getElementById('exploreBtn');

    // Initialize application
    setupEventListeners();
    showWelcomeScreen();

    function setupEventListeners() {
        // Navigation buttons
        navBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                if (this.id === 'aboutBtn') {
                    showAboutModal();
                    return;
                }
                
                const filter = this.dataset.filter;
                if (filter) {
                    setActiveFilter(filter);
                    filterPositions(filter);
                }
            });
        });

        // Search functionality
        searchInput.addEventListener('input', function() {
            searchQuery = this.value.toLowerCase();
            applyFilters();
        });

        // Comparison controls
        compareBtn.addEventListener('click', showComparisonModal);
        clearBtn.addEventListener('click', clearAllSelections);

        // Modal controls
        document.getElementById('closeModal').addEventListener('click', () => {
            comparisonModal.style.display = 'none';
        });
        
        document.getElementById('closeAboutModal').addEventListener('click', () => {
            aboutModal.style.display = 'none';
        });

        // Close modals when clicking outside
        [comparisonModal, aboutModal].forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.style.display = 'none';
                }
            });
        });

        // Explore button
        exploreBtn.addEventListener('click', function() {
            showMainContent();
            renderPositions();
        });

        // Position grid - for checkbox delegation
        positionsGrid.addEventListener('change', function(e) {
            if (e.target.type === 'checkbox') {
                const positionName = e.target.getAttribute('data-position');
                if (positionName) {
                    togglePositionSelection(positionName);
                }
            }
        });
    }

    function showWelcomeScreen() {
        welcomeSection.style.display = 'block';
        searchSection.style.display = 'none';
        mainContent.style.display = 'none';
    }

    function showMainContent() {
        welcomeSection.style.display = 'none';
        searchSection.style.display = 'block';
        mainContent.style.display = 'block';
    }

    function setActiveFilter(filter) {
        currentFilter = filter;
        navBtns.forEach(btn => {
            btn.classList.remove('nav-btn--active');
            if (btn.dataset.filter === filter) {
                btn.classList.add('nav-btn--active');
            }
        });
    }

    function filterPositions(filter) {
        if (!searchSection.style.display || searchSection.style.display === 'none') {
            showMainContent();
        }
        applyFilters();
    }

    function applyFilters() {
        filteredPositions = positionsData.positions.filter(position => {
            const matchesFilter = currentFilter === 'all' || 
                (currentFilter === 'Constitutional' && 
                    (position.branch === 'Constitutional' || 
                    position.branch === 'Constitutional Office' || 
                    position.branch === 'Constitutional Commission')) ||
                position.branch === currentFilter;
                
            const matchesSearch = !searchQuery || 
                position.position.toLowerCase().includes(searchQuery) ||
                position.branch.toLowerCase().includes(searchQuery) ||
                position.citizenship.toLowerCase().includes(searchQuery) ||
                position.age.toLowerCase().includes(searchQuery) ||
                position.educational_professional.toLowerCase().includes(searchQuery) ||
                position.other_requirements.toLowerCase().includes(searchQuery);
            
            return matchesFilter && matchesSearch;
        });
        
        renderPositions();
    }

    function renderPositions() {
        positionsGrid.innerHTML = '';
        
        if (filteredPositions.length === 0) {
            positionsGrid.innerHTML = `
                <div class="no-results">
                    <h3>No positions found</h3>
                    <p>Try adjusting your search terms or filters.</p>
                </div>
            `;
            return;
        }

        filteredPositions.forEach(position => {
            const positionCard = createPositionCard(position);
            positionsGrid.appendChild(positionCard);
        });

        // Update checkbox states
        updateCheckboxStates();
    }

    function updateCheckboxStates() {
        const checkboxes = document.querySelectorAll('.position-select input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            const positionName = checkbox.getAttribute('data-position');
            if (positionName) {
                checkbox.checked = selectedPositions.has(positionName);
            }
        });
    }

    function createPositionCard(position) {
        const card = document.createElement('div');
        card.className = 'position-card';
        
        const branchClass = position.branch === 'Constitutional Office' || position.branch === 'Constitutional Commission' 
            ? 'Constitutional' 
            : position.branch;
        
        card.innerHTML = `
            <div class="position-header">
                <h3 class="position-title">${position.position}</h3>
                <span class="position-branch branch-${branchClass}">${position.branch}</span>
            </div>
            <div class="position-body">
                <div class="position-qualifications">
                    <div class="qualification-item">
                        <div class="qualification-label">Citizenship</div>
                        <div class="qualification-value">${position.citizenship}</div>
                    </div>
                    <div class="qualification-item">
                        <div class="qualification-label">Age</div>
                        <div class="qualification-value">${position.age}</div>
                    </div>
                    <div class="qualification-item">
                        <div class="qualification-label">Education/Professional</div>
                        <div class="qualification-value">${position.educational_professional}</div>
                    </div>
                    <div class="qualification-item">
                        <div class="qualification-label">Residency</div>
                        <div class="qualification-value">${position.residency}</div>
                    </div>
                    <div class="qualification-item">
                        <div class="qualification-label">Other Requirements</div>
                        <div class="qualification-value">${position.other_requirements}</div>
                    </div>
                    ${position.term ? `
                    <div class="qualification-item">
                        <div class="qualification-label">Term</div>
                        <div class="qualification-value">${position.term}</div>
                    </div>
                    ` : ''}
                </div>
            </div>
            <div class="position-footer">
                <div class="position-legal-basis">${position.legal_basis}</div>
                <div class="position-select">
                    <label class="checkbox-container">
                        <input type="checkbox" data-position="${position.position}" ${selectedPositions.has(position.position) ? 'checked' : ''}>
                        Compare
                    </label>
                </div>
            </div>
        `;
        
        return card;
    }

    function togglePositionSelection(positionName) {
        if (selectedPositions.has(positionName)) {
            selectedPositions.delete(positionName);
        } else {
            selectedPositions.add(positionName);
        }
        
        updateCompareButton();
    }

    function updateCompareButton() {
        const count = selectedPositions.size;
        compareBtn.textContent = `Compare Selected (${count})`;
        compareBtn.disabled = count < 2;
    }

    function clearAllSelections() {
        selectedPositions.clear();
        updateCompareButton();
        updateCheckboxStates();
    }

    function showComparisonModal() {
        if (selectedPositions.size < 2) return;
        
        const selectedData = positionsData.positions.filter(pos => 
            selectedPositions.has(pos.position)
        );
        
        renderComparisonTable(selectedData);
        comparisonModal.style.display = 'block';
    }

    function renderComparisonTable(positions) {
        const table = document.getElementById('comparisonTable');
        const qualificationFields = [
            { key: 'citizenship', label: 'Citizenship' },
            { key: 'age', label: 'Age' },
            { key: 'educational_professional', label: 'Education/Professional' },
            { key: 'residency', label: 'Residency' },
            { key: 'other_requirements', label: 'Other Requirements' },
            { key: 'term', label: 'Term' },
            { key: 'legal_basis', label: 'Legal Basis' }
        ];
        
        let tableHTML = '<thead><tr><th>Qualification</th>';
        positions.forEach(pos => {
            tableHTML += `<th class="position-col">${pos.position}</th>`;
        });
        tableHTML += '</tr></thead><tbody>';
        
        qualificationFields.forEach(field => {
            tableHTML += `<tr><td><strong>${field.label}</strong></td>`;
            positions.forEach(pos => {
                const value = pos[field.key] || 'Not specified';
                tableHTML += `<td>${value}</td>`;
            });
            tableHTML += '</tr>';
        });
        
        tableHTML += '</tbody>';
        table.innerHTML = tableHTML;
    }

    function showAboutModal() {
        aboutModal.style.display = 'block';
    }
});